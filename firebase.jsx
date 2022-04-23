// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDalMHtAU3C-2HXNTSxIoVhgsCi7eQIBiA",
  authDomain: "unipe-1bb78.firebaseapp.com",
  projectId: "unipe-1bb78",
  storageBucket: "unipe-1bb78.appspot.com",
  messagingSenderId: "843291652208",
  appId: "1:843291652208:web:156f8676a8cba00aeb44b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth};