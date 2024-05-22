import admin from "firebase-admin";
import { Admin } from "@/shared/type/google/admin";
import { getPerson } from "../../shared/repository/person";
import { getSecret } from "../../shared/gcp/get-secret";
import { HttpStatus } from "http-status-ts";
import OpenAI from "openai";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

import { Request, Response } from "express";

const adminInstance = admin as unknown as Admin;
const secretManagerClient = new SecretManagerServiceClient();

export const handler = async (req: Request, res: Response) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.set("Access-Control-Max-Age", "3600");
        res.status(204).send("");
        return;
    }

    try {
        const userPrompt = req.body;

        // Generate the system prompt to guide the OpenAI API
        const systemPrompt = `
            You're an api assitant. 
            
            You need to convert user querys into data. 
            
            The user query should contain a uuid referring to a particular user. If not please return the json {error:'NO_UUID'}. 

            The reponse should allow the user to fetch the data of the user. The person object has the following structure:

            deleted: (boolean)
            name: "Renamed Person 7625" (string)
            previous_names: ["Person 7625"] (array of strings)
            person_id: "3d0ee3a3-1f62-447a-9c3a-44c346a99d99" (string)
            timestamp: "2024-05-21T15:56:50.879203Z" (string)
            update_time: "2024-05-21T18:25:12.444519Z"   

            Please return the following json structure {uuid: 'the uuid you found in the query', property: 'the property you found in the query, e.g. if the user asked for the name, this would be 'name'}

            Please do not return any markdown formatting. I want the raw json object.
        `;

        const openApiKey = (await getSecret(
            "OPEN_API_KEY",
            secretManagerClient
        )) as string;

        const openai = new OpenAI({ apiKey: openApiKey }); // would normally come from google secret manager

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            model: "gpt-4o",
        });

        const query = chatCompletion.choices[0].message.content;

        if (!query) {
            return res
                .status(400)
                .send("Could not generate query from the given prompt.");
        }

        const queryJson = JSON.parse(query);

        const uuid = queryJson.uuid;
        const property = queryJson.property;

        const result = await getPerson(uuid, adminInstance);

        if (!result) {
            return res
                .status(400)
                .send({ error: `no matching user found ${uuid}` });
        }

        if (!result[property]) {
            return res
                .status(400)
                .send({ error: `no matching property found  ${property}` });
        }

        return res
            .status(HttpStatus.OK)
            .send({ queryResult: result[property] });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.error(
            `Unable to accept request. Unknown error: ${JSON.stringify(e)}`
        );

        return res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send({ error: e.message });
    }
};
