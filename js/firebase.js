import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBVSgdW3Sd5eXOgU4Wmym348_ZesCadsc",
  authDomain: "sccapwl-9fc3d.firebaseapp.com",
  projectId: "sccapwl-9fc3d",
  storageBucket: "sccapwl-9fc3d.appspot.com",
  messagingSenderId: "50419247622",
  appId: "1:50419247622:web:8e6ed66471efa1d0af3187"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(); 
export { app, auth, firestore };