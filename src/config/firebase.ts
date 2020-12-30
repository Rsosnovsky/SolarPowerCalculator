import * as firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCA-NPxCQBnOL25GCTtmg3QI8l28qQZTak",
    authDomain: "solar-power-calculator-59ecb.firebaseapp.com",
    projectId: "solar-power-calculator-59ecb",
    storageBucket: "solar-power-calculator-59ecb.appspot.com",
    messagingSenderId: "693233086714",
    appId: "1:693233086714:web:cf0f6a86583e2f3b4d5943",
    measurementId: "G-HF9TBM0FVR"
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export const uploadData = ()=>{
    console.log('HERE');
dbh.collection("Survey Results").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball"
}).catch((err)=>{
    console.log('err:', err.message)
})
}