// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkJH75-aK26ImzvTAWo4HLrh5T1P9vceQ",
//   authDomain: "my-webapp-76af7.firebaseapp.com",
//   databaseURL: "https://my-webapp-76af7-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "my-webapp-76af7",
//   storageBucket: "my-webapp-76af7.appspot.com",
//   messagingSenderId: "415931737106",
//   appId: "1:415931737106:web:ca6ba33c29c232e5a664cb",
//   measurementId: "G-S00NQ0BDFL"
// };
  
//   firebase.initializeApp(firebaseConfig);
  
//   const loginForm = document.getElementById('login-form');
//   const errorMessage = document.getElementById('error-message');
  
//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     const email = loginForm['email'].value;
//     const password = loginForm['password'].value;
  
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // You can redirect the user to another page or perform other actions upon successful login
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error(errorCode, errorMessage);
//         errorMessage.innerText = errorMessage;
//       });
//   });

  



//   <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDkJH75-aK26ImzvTAWo4HLrh5T1P9vceQ",
//     authDomain: "my-webapp-76af7.firebaseapp.com",
//     databaseURL: "https://my-webapp-76af7-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "my-webapp-76af7",
//     storageBucket: "my-webapp-76af7.appspot.com",
//     messagingSenderId: "415931737106",
//     appId: "1:415931737106:web:ca6ba33c29c232e5a664cb",
//     measurementId: "G-S00NQ0BDFL"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// </script>