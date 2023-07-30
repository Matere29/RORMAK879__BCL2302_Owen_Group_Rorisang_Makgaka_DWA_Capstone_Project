import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx-hoyyXSULTwO7nN-CrXp-h6pXkh96z8",
  authDomain: "podcast-ee4c1.firebaseapp.com",
  projectId: "podcast-ee4c1",
  storageBucket: "podcast-ee4c1.appspot.com",
  messagingSenderId: "1269183756",
  appId: "1:1269183756:web:aaa3b61deaeb0bae95c529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);