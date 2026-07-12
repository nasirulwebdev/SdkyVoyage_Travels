import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGyQL67Mp7L2Qi5bSMR_zGWoJiLrkltLk",
  authDomain: "skyvoyage-rravels.firebaseapp.com",
  projectId: "skyvoyage-rravels",
  storageBucket: "skyvoyage-rravels.firebasestorage.app",
  messagingSenderId: "600534025030",
  appId: "1:600534025030:web:f9a55893ffaffb09185b47",
  measurementId: "G-9RRT9925SZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;