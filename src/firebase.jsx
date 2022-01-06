import { initializeApp } from "firebase/app";
// import getFireStore  from "@firebase/firestore";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZNryFLyuG6xl_H2JOwhqpnw28oiMvv2g",
  authDomain: "crud-app-1fbd2.firebaseapp.com",
  projectId: "crud-app-1fbd2",
  storageBucket: "crud-app-1fbd2.appspot.com",
  messagingSenderId: "856866990009",
  appId: "1:856866990009:web:c8988b6eca8003955ab868",
  measurementId: "G-01E0CTB7L1",
};

const app = initializeApp(firebaseConfig);

// export const db = getFireStore(app);

export const db = getFirestore(app);