// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAWL2NBv3KKWy4FFJ3H6cnOX5I23G8VegE",
  authDomain: "laboratoriomulti-628b0.firebaseapp.com",
  projectId: "laboratoriomulti-628b0",
  storageBucket: "laboratoriomulti-628b0.appspot.com",
  messagingSenderId: "939439561398",
  appId: "1:939439561398:web:70e1de32a3c3d1b7ece417",
  measurementId: "G-C20KKBZ7FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);