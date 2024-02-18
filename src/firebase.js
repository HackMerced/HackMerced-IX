// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const appKey = process.env.REACT_APP_API_KEY;
// const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
// const projectId = process.env.REACT_APP_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
// const messageSenderId = process.env.REACT_APP_MESSEGING_SENDER_ID;
// const appId = process.env.REACT_APP_APP_ID;
// const measurementId = process.env.REACT_APP_MEASUREMENT_ID;

const REACT_APP_API_KEY="AIzaSyB_9KYcifKpGdqxVgMqLj8LmY9AUpMJmNk"
const REACT_APP_AUTH_DOMAIN="hackmerced-ix.firebaseapp.com"
const REACT_APP_PROJECT_ID= "hackmerced-ix"
const REACT_APP_STORAGE_BUCKET="hackmerced-ix.appspot.com"
const REACT_APP_MESSEGING_SENDER_ID="430233538654"
const REACT_APP_APP_ID="1:430233538654:web:5b9786859458bae19ca4cf"
const REACT_APP_MEASUREMENT_ID="G-CMC6FTJ7TE"

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSEGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
};

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: appKey,
//   authDomain: authDomain,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: messageSenderId,
//   appId: appId,
//   measurementId: measurementId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);≈

export default db;

