import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdInVlo7y0F3-60vfPbFSvRCx9YOm3QyI",
  authDomain: "clone-fb484.firebaseapp.com",
  projectId: "clone-fb484",
  storageBucket: "clone-fb484.firebasestorage.app",
  messagingSenderId: "123681713559",
  appId: "1:123681713559:web:b176a044d57705ecc4a8d2",
  measurementId: "G-KBLXF7N4MP"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db , auth , provider};
