import app from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSLH0IvE6sSim1ZLz23LGk5pNDRF3QRQ",
  authDomain: "montassarbenismail.firebaseapp.com",
  databaseURL: "https://montassarbenismail-default-rtdb.firebaseio.com",
  projectId: "montassarbenismail",
  storageBucket: "montassarbenismail.firebasestorage.app",
  messagingSenderId: "538286122525",
  appId: "1:538286122525:web:2d6cb40aee081b123508f4"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase ;