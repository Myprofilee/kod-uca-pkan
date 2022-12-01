const firebaseConfig = {
  apiKey: "AIzaSyCqpXUELVk5i-1pqeayKNBTPKAud4b2Y1Q",
  authDomain: "blogandreid.firebaseapp.com",
  databaseURL: "https://blogandreid-default-rtdb.firebaseio.com",
  projectId: "blogandreid",
  storageBucket: "blogandreid.appspot.com",
  messagingSenderId: "440115998572",
  appId: "1:440115998572:web:609f9fafd49fb778becd49",
  measurementId: "G-B94GF2WP68"
};
const app = firebase.initializeApp(firebaseConfig);
const rdb = firebase.database();
const auth = firebase.auth();
const stg = firebase.storage();