import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth, onAuthStateChanged,signOut } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyC56PyWioL_0ZNZkmcBBbF45FYyixk-tLc",
    authDomain: "loginsuradualdaol.firebaseapp.com",
    projectId: "loginsuradualdaol",
    storageBucket: "loginsuradualdaol.appspot.com",
    messagingSenderId: "264802256971",
    appId: "1:264802256971:web:ff9c280fdfcae5aa4065ce",
    measurementId: "G-ZFCRRZBWNS"
  };

  const app = initializeApp(firebaseConfig);

  let avatar=document.getElementById("avatar")
  let botonSalir=document.getElementById("botonsalir")

  //utilizando la informacion del usuario loggeado
  const auth=getAuth()
  onAuthStateChanged(auth, (user)=>{
    if(user){
        let uid=user.uid
        avatar.classList.remove("invisible")
        avatar.textContent=user.email
    }else{


    }
  })

  botonSalir.addEventListener("click",function(){

    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href="./views/login.html"
    })
  })