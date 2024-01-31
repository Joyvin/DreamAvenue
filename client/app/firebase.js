import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8skiDFvBuBwy0K2tSRTPdIH1PUt7JN5E",
  authDomain: "dream-avenue.firebaseapp.com",
  projectId: "dream-avenue",
  storageBucket: "dream-avenue.appspot.com",
  messagingSenderId: "811881172636",
  appId: "1:811881172636:web:80fd86591fe170233b2759"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);