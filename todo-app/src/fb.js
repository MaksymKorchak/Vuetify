import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "todo-vuetify-project.firebaseapp.com",
    projectId: "todo-vuetify-project",
    storageBucket: "todo-vuetify-project.appspot.com",
    messagingSenderId: "479964810571",
    appId: "1:479964810571:web:1ab4d3ed8e89544013ecce",
    measurementId: "G-HG3WDGHVWL"
};

// Initialize Firebase
firebase.initializeApp(config);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
db.settings({timestampsInSnaphots: true, merge: true})


export default db;
