var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inp3= document.getElementById("inp3");
var inp4 = document.getElementById("inp4");
var inp5 = document.getElementById("inp5");
var inp6 = document.getElementById("inp6");
var inp7 = document.getElementById("inp7");
var inp8 = document.getElementById("inp8");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase,
    ref,
set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7xyTRYXb5cZ0nL_DzU4rLPFsi1bpIAvU",
  authDomain: "light-e0122.firebaseapp.com",
  databaseURL: "https://light-e0122-default-rtdb.firebaseio.com",
  projectId: "light-e0122",
  storageBucket: "light-e0122.appspot.com",
  messagingSenderId: "282294227413",
  appId: "1:282294227413:web:acac478943f98b7b172d5c",
  measurementId: "G-E2QHX2XHGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
window.submitData = function(){
    var obj = {
        inp1:inp1.value,
        inp2:inp2.value,
        inp3:inp3.value,
        inp4:inp4.value,
        inp5:inp5.value,
        inp6:inp6.value,
        inp7:inp7.value,
        inp8:inp8.value,
}
    console.log(obj);
obj.id = Math.random().toString().slice(2);
    const reference = ref(db,`inp/${obj.id}/`);
    set(reference,obj).then(
        function (){
            console.log("datasubmit");
        }
    ).catch(
        function(err){
            console.log(err.message);
        }
    )
}
