import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDdInVlo7y0F3-60vfPbFSvRCx9YOm3QyI",
  authDomain: "clone-fb484.firebaseapp.com",
  projectId: "clone-fb484",
  storageBucket: "clone-fb484.firebasestorage.app",
  messagingSenderId: "123681713559",
  appId: "1:123681713559:web:b176a044d57705ecc4a8d2",
  measurementId: "G-KBLXF7N4MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

