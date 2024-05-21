import admin from "firebase-admin";
import { Admin } from "@/shared/type/google/admin";
import { getPerson } from "../../shared/repository/person";
import { HttpStatus } from "http-status-ts";
import { schemas } from "../../shared/type/api/generated/api-spec";

import { Request, Response } from "express";

const adminInstance = admin as unknown as Admin;

export const handler = async (req: Request, res: Response) => {
    try {
        const nameResponsePayload = schemas.GetNameQuery.safeParse(req.body);

        if (!nameResponsePayload.success) {
            return res
                .status(HttpStatus.BAD_REQUEST)
                .send({ error: nameResponsePayload.error });
        }

        const result = await getPerson(
            nameResponsePayload.data.person_id,
            adminInstance
        );

        return res.status(HttpStatus.OK).send(result);
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
