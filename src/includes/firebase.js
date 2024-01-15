// import firebase from 'firebase/compat/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = { // Have the firebase config here
    apiKey: "AIzaSyCV9ai_uQ57xrgxo4XR1gpM_vRH-OB5p0k",
    authDomain: "music-9872c.firebaseapp.com",
    projectId: "music-9872c",
    storageBucket: "music-9872c.appspot.com",
    appId: "1:1032236028300:web:2b1b0b94ec84a86d50c6a9"
};

// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
    console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users")
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {auth, db, usersCollection, storage, songsCollection, commentsCollection};