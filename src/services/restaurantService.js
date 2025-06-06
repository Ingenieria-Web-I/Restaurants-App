import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const COLLECTION = "restaurants";

export const fetchRestaurants = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createRestaurant = async (data) => {
  await addDoc(collection(db, COLLECTION), data);
};

export const getRestaurantById = async (id) => {
  const docRef = doc(db, COLLECTION, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const updateRestaurant = async (id, data) => {
  const docRef = doc(db, COLLECTION, id);
  await updateDoc(docRef, data);
};

export const deleteRestaurant = async (id) => {
  await deleteDoc(doc(db, COLLECTION, id));
};