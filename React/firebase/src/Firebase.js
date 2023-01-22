import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAmxGI_wmfPOYFIrjYr6Tbv2zA0BCMBac",
  authDomain: "yt-demo-77cb2.firebaseapp.com",
  projectId: "yt-demo-77cb2",
  storageBucket: "yt-demo-77cb2.appspot.com",
  messagingSenderId: "159044702471",
  appId: "1:159044702471:web:eaf5a8b8f2badb24f135a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);










