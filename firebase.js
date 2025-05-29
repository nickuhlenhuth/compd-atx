import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW1JxPE_BSVh-_7rRNEuav0QJkXKwN8t4",
  authDomain: "compd-becff.firebaseapp.com",
  projectId: "compd-becff",
  storageBucket: "compd-becff.firebasestorage.app",
  messagingSenderId: "643924247955",
  appId: "1:643924247955:web:95d843c3a939b5e2019466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 