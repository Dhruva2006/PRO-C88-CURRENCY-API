import firebase from 'firebase'; 
import '@firebase/firestore'; 
// Required for side-effects 
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNjWr72bPs9SrD4O-GE3roX_73w47pLzM",
    authDomain: "book-santa-c7f2d.firebaseapp.com",
    projectId: "book-santa-c7f2d",
    storageBucket: "book-santa-c7f2d.appspot.com",
    messagingSenderId: "282059953609",
    appId: "1:282059953609:web:43c98c6e04f0ce11158418"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp({});
}
//export default firebase.database() 
var db = firebase.firestore(); 
export default db;