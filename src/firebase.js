import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA2MRdhcQ-6ex98ZO6Bn1AWmTFNoEjrwII",
    authDomain: "project-defense-90c21.firebaseapp.com",
    databaseURL: "https://project-defense-90c21-default-rtdb.firebaseio.com",
    projectId: "project-defense-90c21",
    storageBucket: "project-defense-90c21.appspot.com",
    messagingSenderId: "908341714152",
    appId: "1:908341714152:web:417a365fd7fdf1fdc53d5d"
})

export const auth = app.auth()
export default app