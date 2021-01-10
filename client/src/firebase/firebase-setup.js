import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
export const app = firebase.initializeApp({
  apiKey: 'AIzaSyBVypAzJWvQBoD3JcK6NggnmfirsxwyJ0g',
  authDomain: 'caldar-rr.firebaseapp.com',
  projectId: 'caldar-rr',
  storageBucket: 'caldar-rr.appspot.com',
  messagingSenderId: '832398978303',
  appId: '1:832398978303:web:29e86b3a5ac69ce2b530ca',
});
// Initialize Firebase

export const googleAuth = new firebase.auth.GoogleAuthProvider();
