import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { FaSignOutAlt } from "react-icons/fa";

const firebaseConfig = {
    apiKey: "AIzaSyDd4rZC6hWLrEOJJJsSjogk-IeUnI20BnE",
    authDomain: "fategpt.firebaseapp.com",
    projectId: "fategpt",
    storageBucket: "fategpt.appspot.com",
    messagingSenderId: "1076494284280",
    appId: "1:1076494284280:web:60278df9c7e2d4b992d20d"
};

firebase.initializeApp(firebaseConfig);


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
};

export const logout = () => {
    auth.signOut().then(()=>{
        console.log("signed out")
    }).catch(err => {
        console.log(err)
    })
}

export const auth = firebase.auth();

export default firebase;