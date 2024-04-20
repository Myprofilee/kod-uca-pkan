const firebaseConfig = {
  apiKey: "AIzaSyBe7G6rFovAklTKNTmFb1TSogsiYDy_WO4",
  authDomain: "andrepid.firebaseapp.com",
  databaseURL: "https://andrepid-default-rtdb.firebaseio.com",
  projectId: "andrepid",
  storageBucket: "andrepid.appspot.com",
  messagingSenderId: "475106414273",
  appId: "1:475106414273:web:5921db06c2580738724e40",
  measurementId: "G-HTMHQWX8B6"
};
const app = firebase.initializeApp(firebaseConfig);
const rdb = firebase.database();
const auth = firebase.auth();
const stg = firebase.storage();