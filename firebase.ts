import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFzPkAZRCE-g1n2YnaQk4pYUQ2m7fjjJg",
  authDomain: "chatgptopenai007-e25cd.firebaseapp.com",
  projectId: "chatgptopenai007-e25cd",
  storageBucket: "chatgptopenai007-e25cd.appspot.com",
  messagingSenderId: "103310491628",
  appId: "1:103310491628:web:a1bd6c82bdd820ad194ac9",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//Single turn patterning coding

const db = getFirestore(app);

export { db };
