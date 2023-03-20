import {getApp, getApps, initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBddLddWKOhcSLJXTnxrQMAPvF56jgtBlc",
    authDomain: "resturantapp-15f7a.firebaseapp.com",
    databaseURL: "https://resturantapp-15f7a-default-rtdb.firebaseio.com",
    projectId: "resturantapp-15f7a",
    storageBucket: "resturantapp-15f7a.appspot.com",
    messagingSenderId: "583102570757",
    appId: "1:583102570757:web:9932643350e9f27842176c"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};