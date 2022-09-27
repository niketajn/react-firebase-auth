import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsM2xaXwDw7c2s9MvjixDaD6c0FXsXVHA",
  authDomain: "login-authentication-f4c18.firebaseapp.com",
  projectId: "login-authentication-f4c18",
  storageBucket: "login-authentication-f4c18.appspot.com",
  messagingSenderId: "570162968163",
  appId: "1:570162968163:web:c4920717513cbabc326a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;