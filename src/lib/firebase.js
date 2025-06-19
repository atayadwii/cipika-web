import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4iM4paXp7DsKN5hD-DodaXYhkG8T3LS0",
  authDomain: "cipika-web.firebaseapp.com",
  projectId: "cipika-web",
  storageBucket: "cipika-web.firebasestorage.app",
  messagingSenderId: "893341355415",
  appId: "1:893341355415:web:3ac1cc29c5d366607608d2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };