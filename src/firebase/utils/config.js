import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyD-MX0CQJSdu6fICzGuIRiQuFsLqTmXRg4",
    authDomain: "smart-infra.firebaseapp.com",
    projectId: "smart-infra",
    storageBucket: "smart-infra.appspot.com",
    messagingSenderId: "388511120554",
    appId: "1:388511120554:web:a0c1dc5d8fd1961b1fa4d3"
};

const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);
