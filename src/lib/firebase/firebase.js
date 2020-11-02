import Firebase from 'firebase/app';
import 'firebase/firestore';
import auth from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaNnTKHcJ6sioyEg1dDdgDRTvsNn03fJQ",
    authDomain: "netflix-pro-clone.firebaseapp.com",
    databaseURL: "https://netflix-pro-clone.firebaseio.com",
    projectId: "netflix-pro-clone",
    storageBucket: "netflix-pro-clone.appspot.com",
    messagingSenderId: "785411405957",
    appId: "1:785411405957:web:009b18701bb0afb81651ec",
    measurementId: "G-65ZFEKSTPY"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };