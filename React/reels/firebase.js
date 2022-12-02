// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFXgEJtQHps2XvLbNOgQcjH-3O0R7hcfg",
  authDomain: "insta-reel-fjp5.firebaseapp.com",
  projectId: "insta-reel-fjp5",
  storageBucket: "insta-reel-fjp5.appspot.com",
  messagingSenderId: "878952409790",
  appId: "1:878952409790:web:1ae4a53dd39f170f7f8cef",
  measurementId: "G-12088KPF0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
export {auth};
