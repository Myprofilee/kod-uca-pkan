const firebaseConfig = {
  apiKey: "AIzaSyAVtWmVP-ZibDHl0-AD8HNr7ZAlGNGySZA",
  authDomain: "maca-id.firebaseapp.com",
  databaseURL: "https://maca-id-default-rtdb.firebaseio.com",
  projectId: "maca-id",
  storageBucket: "maca-id.appspot.com",
  messagingSenderId: "2073482024",
  appId: "1:2073482024:web:2f1c996fe523b2282ab61d",
  measurementId: "G-GVWFNJS6R1"
};
const app = firebase.initializeApp(firebaseConfig);
const rdb = firebase.database();
const auth = firebase.auth();
const stg = firebase.storage();