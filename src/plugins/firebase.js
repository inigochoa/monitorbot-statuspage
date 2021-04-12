import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

export default firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIRESTORE_API_KEY,
  appId: process.env.VUE_APP_FIRESTORE_APP_ID,
  authDomain: `${process.env.VUE_APP_FIRESTORE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_FIRESTORE_PROJECT_ID}.firebaseapp.com`,
  messagingSenderId: `${process.env.VUE_APP_FIRESTORE_MESSAGING_SENDER_ID}`,
  projectId: process.env.VUE_APP_FIRESTORE_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_FIRESTORE_PROJECT_ID}.appspot.com`,
})
