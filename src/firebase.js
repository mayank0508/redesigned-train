import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyCGCDfgs-3US2qOn4luYb5VVsS3MYP3mNQ",
        authDomain: "blowit-200d1.firebaseapp.com",
        projectId: "blowit-200d1",
        storageBucket: "blowit-200d1.appspot.com",
        messagingSenderId: "949957697395",
        appId: "1:949957697395:web:801cda431f30a93d0aaf06"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;