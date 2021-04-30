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

export const uploadData = (info: any, pullDocID: { (input: string): void; (arg0: any): void; })=>{
    
dbh.collection("Survey Results").add({info}).then  ((docRef: any)=>{
    pullDocID(docRef.id) //retrun the ref ID in DB to be used to match the email with
})
    
.catch((err: any)=>{
    console.log('err:', err.message)
})
}

export const uploadEmailData = (info)=>{
    
    dbh.collection("Email List").add({info})
        
    .catch((err: any)=>{
        console.log('err:', err.message)
    })
    }