
import { db } from "../firebaseConfig";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

const COLLECTION_NAME = "restaurants";

export const restaurantService = {
    async getAll() {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    },

    async getById(id) {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error("No se encontró el restaurante");
    return docSnap.data();
    },

    async create(data) {
    return await addDoc(collection(db, COLLECTION_NAME), data);
    },

    async update(id, data) {
    const docRef = doc(db, COLLECTION_NAME, id);
    return await updateDoc(docRef, data);
    },

    async remove(id) {
    const docRef = doc(db, COLLECTION_NAME, id);
    return await deleteDoc(docRef);
    },
};
