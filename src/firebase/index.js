import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCg67FTfV0XNZImDZRJEPgJdm3OcePFcYM",
    authDomain: "seismic-catbird-288903.firebaseapp.com",
    databaseURL: "https://seismic-catbird-288903.firebaseio.com",
    projectId: "seismic-catbird-288903",
    storageBucket: "seismic-catbird-288903.appspot.com",
    messagingSenderId: "718601061213",
    appId: "1:718601061213:web:71fece077162da58b35eb4",
    measurementId: "G-JWQ0146YRY"
};

firebase.initializeApp(firebaseConfig);


export default firebase

  // uploadTask.on(
    //   "state_changed",
    //   snapshot => { },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {
    //     firebase.storage()
    //       .ref("images")
    //       .child(image.name)
    //       .getDownLoadURL()
    //       .then(url => {
    //         console.log(url);
    //       })
    //   }
    // )