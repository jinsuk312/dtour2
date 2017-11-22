import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDtyOiEA1ODZE13gAAduEzkB0jBTlPiGRM",
  authDomain: "tripdtour.firebaseapp.com",
  databaseURL: "https://tripdtour.firebaseio.com",
  projectId: "tripdtour",
  storageBucket: "",
  messagingSenderId: "533632707995"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { app, base }