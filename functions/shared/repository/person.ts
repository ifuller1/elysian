import { Admin } from "../type/google/admin";
import { getFirebaseDb } from "../gcp/firebase";

import {
    GetNameResponse,
    PersonAdded,
    PersonRemoved,
    PersonRenamed,
} from "../type/api/generated/api-spec";

const PERSON_COLLECTION_NAME = "person";

const createPerson: (
    personAdded: PersonAdded,
    admin: Admin
) => Promise<PersonAdded> = async (personAdded, admin) => {
    const db = getFirebaseDb(admin);
    const userRef = db
        .collection(PERSON_COLLECTION_NAME)
        .doc(personAdded.person_id);

    await userRef.set(personAdded);

    return personAdded;
};

const getPerson: (
    personId: string,
    admin: Admin
) => Promise<GetNameResponse | null> = async (personId, admin) => {
    const db = getFirebaseDb(admin);
    const userRef = db.collection(PERSON_COLLECTION_NAME).doc(personId);

    const person = await userRef.get();

    if (!person.exists) {
        return null;
    }

    return {
        name: person.data().name,
    } as GetNameResponse;
};

const renamePerson: (
    personRenamed: PersonRenamed,
    admin: Admin
) => Promise<PersonRenamed> = async (personRenamed, admin) => {
    const db = getFirebaseDb(admin);
    const userRef = db
        .collection(PERSON_COLLECTION_NAME)
        .doc(personRenamed.person_id);

    const person = await userRef.get();

    if (!person.exists) {
        throw new Error("Person does not exist");
    }

    if (person.data().deleted) {
        throw new Error("Person is deleted");
    }

    await userRef.update({
        name: personRenamed.name,
        update_time: personRenamed.timestamp,
    });

    return personRenamed;
};

const removePerson: (
    personRemoved: PersonRemoved,
    admin: Admin
) => Promise<PersonRemoved> = async (personRemoved, admin) => {
    const db = getFirebaseDb(admin);
    const userRef = db
        .collection(PERSON_COLLECTION_NAME)
        .doc(personRemoved.person_id);

    const person = await userRef.get();

    if (!person.exists) {
        throw new Error("Person does not exist");
    }

    await userRef.update({
        deleted: true,
    });

    return personRemoved;
};

export { renamePerson, createPerson, removePerson, getPerson };
