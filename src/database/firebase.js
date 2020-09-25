import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKgENz7BoLHcHVyyPeqmdMjodYqikh6cw",
    authDomain: "banco-1485f.firebaseapp.com",
    databaseURL: "https://banco-1485f.firebaseio.com",
    projectId: "banco-1485f",
    storageBucket: "banco-1485f.appspot.com",
    messagingSenderId: "219480722131",
    appId: "1:219480722131:web:ea7d200f57cc08736e2226"
};

export default firebase.initializeApp(firebaseConfig);