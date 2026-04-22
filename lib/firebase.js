import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1NKdEEnZoDBs8Ow1xigtff4SqxeIC-MI",
  authDomain: "roodel-trust.firebaseapp.com",
  projectId: "roodel-trust",
  storageBucket: "roodel-trust.firebasestorage.app",
  messagingSenderId: "972869717198",
  appId: "1:972869717198:web:cfc6ec2deb62826fba549f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// 👉 ADD THIS
export const provider = new GoogleAuthProvider();