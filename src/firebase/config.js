// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
apiKey: "AIzaSyCRo3rSOLyaP8BVR8pxHxTR5Kf7cqnRDVU",
authDomain: "photo-gallery-34.firebaseapp.com",
projectId: "photo-gallery-34",
storageBucket: "photo-gallery-34.appspot.com",
messagingSenderId: "298453008119",
appId: "1:298453008119:web:a6b88f43ede9c3703cddf2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }