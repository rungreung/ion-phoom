import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsni-XHjFivTj93h9hki98AeyiCE7lbrg",
  authDomain: "ion-phoom.firebaseapp.com",
  projectId: "ion-phoom",
  storageBucket: "ion-phoom.appspot.com",
  messagingSenderId: "464822911987",
  appId: "1:464822911987:web:e5ab03f984cf1e819d8886",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export async function loginUser(email: string, password: string) {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    return false;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    //toast(error, message, 400);
    return false;
  }
}
