import firebase from 'firebase/app';
import "firebase/auth";

export const auth =  firebase.initializeApp ({
  apiKey: "AIzaSyD4Umr7CkVzYeWGgUh3RYtWqzsd4vuZm3A",
  authDomain: "unichat-4762d.firebaseapp.com",
  projectId: "unichat-4762d",
  storageBucket: "unichat-4762d.appspot.com",
  messagingSenderId: "739724315426",
  appId: "1:739724315426:web:5457cd4987d265bb01737b"
}).auth();