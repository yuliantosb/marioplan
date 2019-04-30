import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDVK5HOafVGNpnvlwzZK4aWiRtU0qBfYtc",
  authDomain: "net-ninja-mario-plan-6a665.firebaseapp.com",
  databaseURL: "https://net-ninja-mario-plan-6a665.firebaseio.com",
  projectId: "net-ninja-mario-plan-6a665",
  storageBucket: "net-ninja-mario-plan-6a665.appspot.com",
  messagingSenderId: "681213069880"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase 