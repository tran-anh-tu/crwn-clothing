import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDC7kjRF6rGOijED0xpOSDf_bIjHrK9gCI",
  authDomain: "crwn-db-6e088.firebaseapp.com",
  projectId: "crwn-db-6e088",
  storageBucket: "crwn-db-6e088.appspot.com",
  messagingSenderId: "267283423854",
  appId: "1:267283423854:web:094cce947bbf00db627c7f",
  measurementId: "G-Z97FWVHVK8"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
