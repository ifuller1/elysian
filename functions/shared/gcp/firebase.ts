import { Admin } from "../type/google/admin";

const getFirebaseDb = (admin: Admin) => {
    // Create a reference to the Firestore database
    const db = getFirebaseAdmin(admin).firestore();

    return db;
};

const getFirebaseAdmin = (admin: Admin) => {
    if (admin.apps.length === 0) {
        console.log("Initializing Firebase Admin SDK");

        admin.initializeApp();

        console.log("Firebase Admin SDK initialized");
    }
    return admin;
};
export { getFirebaseDb, getFirebaseAdmin };
