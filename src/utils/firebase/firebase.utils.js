// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0mrWFXGjJ4jkuTCwOzM6BWHVvHu_yBwc",
    authDomain: "bytebender-application-suite.firebaseapp.com",
    projectId: "bytebender-application-suite",
    storageBucket: "bytebender-application-suite.appspot.com",
    messagingSenderId: "442029860985",
    appId: "1:442029860985:web:396912745d245100294ca8",
    measurementId: "G-XV5RP1D0YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // if user data does not exist
    // create / set the document with the data from userAuth in the users collection
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("error creating the user", error);
        }
    }

    // if user data exists
    // return userDocRef
    return userDocRef;
}