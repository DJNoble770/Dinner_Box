import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyADDooNjHzYrOHLigjXSVypWgGrZzW4VR8",
  authDomain: "dinner-box-f8c64.firebaseapp.com",
  projectId: "dinner-box-f8c64",
  storageBucket: "dinner-box-f8c64.firebasestorage.app",
  messagingSenderId: "285616906292",
  appId: "1:285616906292:web:4d4b5b47afd19546e0aa61"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
