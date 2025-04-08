import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy3sL2IXyZ08ltZQocEUIIlR6G4CEK808",
  authDomain: "vaad-e0454.firebaseapp.com",
  projectId: "vaad-e0454",
  storageBucket: "vaad-e0454.firebasestorage.app",
  messagingSenderId: "561555828214",
  appId: "1:561555828214:web:d7dcb8a7d202e57f56ebd7",
  measurementId: "G-VCHKX8E1LX"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
