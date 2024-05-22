import admin from "firebase-admin";
import { HttpStatus } from "http-status-ts";

import { Admin, ArrayUnion } from "@/shared/type/google/admin";
import {
    createPerson,
    removePerson,
    renamePerson,
} from "../../shared/repository/person";
import {
    PersonAdded,
    PersonRemoved,
    PersonRenamed,
    schemas,
} from "../../shared/type/api/generated/api-spec";
import { Request, Response } from "express";

const adminInstance = admin as unknown as Admin;
const arrayUnion = admin.firestore.FieldValue
    .arrayUnion as unknown as ArrayUnion;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const payloadHandlerMap = new Map<string, (payload: any) => Promise<any>>([
    [
        "PersonAdded",
        async (payload: PersonAdded) => {
            return await createPerson(payload, adminInstance);
        },
    ],
    [
        "PersonRenamed",
        async (payload: PersonRenamed) => {
            return await renamePerson(payload, adminInstance, arrayUnion);
        },
    ],
    [
        "PersonRemoved",
        async (payload: PersonRemoved) => {
            return await removePerson(payload, adminInstance);
        },
    ],
]);

export const handler = async (req: Request, res: Response) => {
    try {
        const webhookPayload = schemas.WebhookPayload.safeParse(req.body);

        if (!webhookPayload.success) {
            return res
                .status(HttpStatus.BAD_REQUEST)
                .send({ error: webhookPayload.error });
        }

        const actionHandler = payloadHandlerMap.get(
            webhookPayload.data.payload_type
        );

        if (!actionHandler) {
            return res
                .status(HttpStatus.BAD_REQUEST)
                .send({ error: "Invalid payload type" });
        }

        const result = await actionHandler(webhookPayload.data.payload_content);

        return res
            .status(HttpStatus.OK)
            .send({ status: "success", processed: result });
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
