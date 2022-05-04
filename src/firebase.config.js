import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkZvbqaagWUzcsJ4U68K9eUuh85qHhndI",
  authDomain: "house-market-app-b60cb.firebaseapp.com",
  projectId: "house-market-app-b60cb",
  storageBucket: "house-market-app-b60cb.appspot.com",
  messagingSenderId: "1040074181299",
  appId: "1:1040074181299:web:421e868aaef33b9540bec6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
