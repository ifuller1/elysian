interface CustomClaims {
    guest: boolean;
}

type DecodedToken = {
    email?: string;
    email_verified?: boolean;
    uid: string;
    name: string;
    exp: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

type UserRecord = {
    uid: string;
    email: string;
};

type DocumentReference = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: (...args: any) => Promise<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: (...args: any) => Promise<any>;
    get: () => Promise<DocumentData>;
    collection: (collectionName: string) => FirestoreCollectionQueryOrDoc;
    id: string;
};

type DocumentData = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: () => any;
    id: string;
    exists: boolean;
};

type EmptyDocs = {
    empty: true;
    docs: undefined;
    size: 0;
};

type WithDocs = {
    empty: false;
    docs: DocumentData[];
    size: number;
};

type FirestoreQueryRef = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: () => any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: () => any;
    get: () => Promise<EmptyDocs | WithDocs>;
};

type FirestoreQueryCollection = {
    doc: (docId: string) => DocumentReference;
    add(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any
    ): Promise<DocumentReference>;
};

type FirestoreCollectionQuery = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    where: (...query: any[]) => FirestoreCollectionQuery & FirestoreQueryRef;
    orderBy: (
        query: string,
        direction?: "desc"
    ) => FirestoreCollectionQuery & FirestoreQueryRef;
    limit: (limit: number) => FirestoreCollectionQuery & FirestoreQueryRef;
    select: (
        ...query: string[]
    ) => FirestoreCollectionQuery & FirestoreQueryRef;
    startAfter: (query: string) => FirestoreCollectionQuery & FirestoreQueryRef;
    endBefore: (query: string) => FirestoreCollectionQuery & FirestoreQueryRef;
    startAt: (
        ...query: (string | number)[]
    ) => FirestoreCollectionQuery & FirestoreQueryRef;
    endAt: (
        ...query: (string | number)[]
    ) => FirestoreCollectionQuery & FirestoreQueryRef;
};

type FirestoreCollectionQueryOrDoc = FirestoreCollectionQuery &
    FirestoreQueryRef &
    FirestoreQueryCollection;

type FirestoreResult = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commit: () => Promise<any>;
};

type FirestoreBatch = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: (ref: any, data: any) => FirestoreBatch;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete: (ref: any) => FirestoreBatch;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: (ref: any, data: any) => FirestoreBatch;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: (ref: any, data: any) => FirestoreBatch;
};

type FirestoreBatchOrResult = FirestoreBatch & FirestoreResult;

type FirestoreInstance = {
    collection: (collectionName: string) => FirestoreCollectionQueryOrDoc;
    batch: () => FirestoreBatchOrResult;
} & FirestoreQueryCollection;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArrayUnion = (...elements: any[]) => FieldValue;

export type FieldValue = {
    /**
     * Returns a sentinel used with set(), create() or update() to include a
     * server-generated timestamp in the written data.
     *
     * @return The FieldValue sentinel for use in a call to set(), create() or
     * update().
     */
    serverTimestamp(): FieldValue;

    /**
     * Returns a sentinel for use with update() or set() with {merge:true} to
     * mark a field for deletion.
     *
     * @return The FieldValue sentinel for use in a call to set() or update().
     */
    delete(): FieldValue;

    /**
     * Returns a special value that can be used with set(), create() or update()
     * that tells the server to increment the field's current value by the given
     * value.
     *
     * If either current field value or the operand uses floating point
     * precision, both values will be interpreted as floating point numbers and
     * all arithmetic will follow IEEE 754 semantics. Otherwise, integer
     * precision is kept and the result is capped between -2^63 and 2^63-1.
     *
     * If the current field value is not of type 'number', or if the field does
     * not yet exist, the transformation will set the field to the given value.
     *
     * @param n The value to increment by.
     * @return The FieldValue sentinel for use in a call to set(), create() or
     * update().
     */
    increment(n: number): FieldValue;

    /**
     * Returns a special value that can be used with set(), create() or update()
     * that tells the server to union the given elements with any array value
     * that already exists on the server. Each specified element that doesn't
     * already exist in the array will be added to the end. If the field being
     * modified is not already an array it will be overwritten with an array
     * containing exactly the specified elements.
     *
     * @param elements The elements to union into the array.
     * @return The FieldValue sentinel for use in a call to set(), create() or
     * update().
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arrayUnion: ArrayUnion;
};

interface Admin {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apps: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    credential: any;
    auth: () => {
        setCustomUserClaims: (
            uid: string,
            customUserClaims: object | null
        ) => Promise<void>;
        createCustomToken: (
            uid: string,
            developerClaims?: object
        ) => Promise<string>;
        verifyIdToken: (
            idToken: string,
            checkRevoked?: boolean
        ) => Promise<DecodedToken>;
        getUserByEmail(email: string): Promise<UserRecord>;
        getUser(uid: string): Promise<UserRecord>;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initializeApp: (arg0?: { credential: any }) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    firestore: () => FirestoreInstance;

    messaging: () => {
        sendEachForMulticast(
            message: MulticastMessage,
            dryRun?: boolean
        ): Promise<BatchResponse>;
    };
}

export interface BatchResponse {
    /**
     * An array of responses, each corresponding to a message.
     */
    responses: SendResponse[];
    /**
     * The number of messages that were successfully handed off for sending.
     */
    successCount: number;
    /**
     * The number of messages that resulted in errors when sending.
     */
    failureCount: number;
}
/**
 * Interface representing the status of an individual message that was sent as
 * part of a batch request.
 */
export interface SendResponse {
    /**
     * A boolean indicating if the message was successfully handed off to FCM or
     * not. When true, the `messageId` attribute is guaranteed to be set. When
     * false, the `error` attribute is guaranteed to be set.
     */
    success: boolean;
    /**
     * A unique message ID string, if the message was handed off to FCM for
     * delivery.
     *
     */
    messageId?: string;
    /**
     * An error, if the message was not handed off to FCM successfully.
     */

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
}

export interface Notification {
    /**
     * The title of the notification.
     */
    title?: string;
    /**
     * The notification body
     */
    body?: string;
    /**
     * URL of an image to be displayed in the notification.
     */
    imageUrl?: string;
}

export interface BaseMessage {
    data?: {
        [key: string]: string;
    };
    notification?: Notification;
    // android?: AndroidConfig;
    // webpush?: WebpushConfig;
    // apns?: ApnsConfig;
    // fcmOptions?: FcmOptions;
}
export interface TokenMessage extends BaseMessage {
    token: string;
}
export interface TopicMessage extends BaseMessage {
    topic: string;
}
export interface ConditionMessage extends BaseMessage {
    condition: string;
}
export interface MulticastMessage extends BaseMessage {
    tokens: string[];
}

export type {
    Admin,
    CustomClaims,
    DecodedToken,
    UserRecord,
    DocumentData,
    FirestoreBatchOrResult,
    EmptyDocs,
    WithDocs,
};
