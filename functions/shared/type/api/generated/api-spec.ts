import { z } from "zod";

const PersonAdded = z
    .object({
        person_id: z.string().uuid(),
        name: z.string(),
        timestamp: z.string().datetime({ offset: true }),
    })
    .passthrough();
const PersonRenamed = z
    .object({
        person_id: z.string().uuid(),
        name: z.string(),
        timestamp: z.string().datetime({ offset: true }),
    })
    .passthrough();
const PersonRemoved = z
    .object({
        person_id: z.string().uuid(),
        timestamp: z.string().datetime({ offset: true }),
    })
    .passthrough();
const WebhookPayload = z
    .object({
        payload_type: z.enum(["PersonAdded", "PersonRenamed", "PersonRemoved"]),
        payload_content: z.union([PersonAdded, PersonRenamed, PersonRemoved]),
    })
    .passthrough();
const GetNameResponse = z
    .object({ name: z.string().nullable() })
    .partial()
    .passthrough();
const GetNameQuery = z.object({ person_id: z.string() }).passthrough();

export const schemas = {
    PersonAdded,
    PersonRenamed,
    PersonRemoved,
    WebhookPayload,
    GetNameResponse,
    GetNameQuery,
};

export type PersonAdded = z.infer<typeof PersonAdded>;
export type PersonRenamed = z.infer<typeof PersonRenamed>;
export type PersonRemoved = z.infer<typeof PersonRemoved>;
export type GetNameResponse = z.infer<typeof GetNameResponse>;
export type GetNameQuery = z.infer<typeof GetNameQuery>;
export type Actions = PersonAdded | PersonRenamed | PersonRemoved;
export type WebhookPayload = z.infer<typeof WebhookPayload>;
