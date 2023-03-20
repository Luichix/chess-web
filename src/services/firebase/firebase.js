// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-AxmjEyoAvrs0I-OjQnGvCf-H7aiYfkc',
  authDomain: 'king-client.firebaseapp.com',
  databaseURL: 'https://king-client-default-rtdb.firebaseio.com',
  projectId: 'king-client',
  storageBucket: 'king-client.appspot.com',
  messagingSenderId: '456285720702',
  appId: '1:456285720702:web:8b8e7a9878059075e1c82f',
  measurementId: 'G-150V7Y5FV2',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
