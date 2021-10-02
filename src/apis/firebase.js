import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebase';

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export function signInWithGoogle() {
    return firebase.auth().signInWithPopup(provider)
}

export function signOut() {
    return firebase.auth().signOut();
}

export function signInWithFacebook() {
    return firebase.auth().signInWithPopup(providerFacebook);
}

export function signOutWithFacebook() {
    return firebase.auth().signOut();
}