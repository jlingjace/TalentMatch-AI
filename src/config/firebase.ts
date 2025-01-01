import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaPUA9SOxpZApeAjSBPxfdnMeDqlbLqV4",
  authDomain: "ai-saas-81b01.firebaseapp.com",
  projectId: "ai-saas-81b01",
  storageBucket: "ai-saas-81b01.firebasestorage.app",
  messagingSenderId: "207260880288",
  appId: "1:207260880288:web:636bca95bddbca9bba28c5",
  measurementId: "G-6V9HRCDS7P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);