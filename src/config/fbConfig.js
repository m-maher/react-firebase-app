import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCPqCeyzPz-W_XIpSJjVNJYZiPM3uepE6I",
    authDomain: "project114.firebaseapp.com",
    databaseURL: "https://project114.firebaseio.com",
    projectId: "project114",
    storageBucket: "project114.appspot.com",
    messagingSenderId: "980216065293",
    appId: "1:980216065293:web:5f1cca7beaf00dbd"
}
  
firebase.initializeApp(config);
firebase.firestore()

export default firebase