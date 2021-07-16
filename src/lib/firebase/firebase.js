import Firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import auth from "firebase";
// firebase configs are not published to git. You can create on your own.
// After that create a file name "firebaseConfig.js" in the same dir and paste the your config there

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
