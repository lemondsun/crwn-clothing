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

  console.log(firestore.doc('users/1223349'))

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