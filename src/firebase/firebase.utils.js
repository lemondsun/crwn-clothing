import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';//for storage
import 'firebase/compat/auth';//for authentication

const config = {
  apiKey: "AIzaSyDD9znxNZc_BQ2L0lTDCqcrxgMzLgM8EFE",
  authDomain: "crwn-db-c4ce2.firebaseapp.com",
  projectId: "crwn-db-c4ce2",
  storageBucket: "crwn-db-c4ce2.appspot.com",
  messagingSenderId: "1094093866587",
  appId: "1:1094093866587:web:86dfc2d6ebf852900be17e",
  measurementId: "G-KE71D083C7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  //incase we want use the userRef to do other things
  return userRef;
};

firebase.initializeApp(config);

//this allows us to export out the firebase authentication
export const auth = firebase.auth();
//for storage
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;