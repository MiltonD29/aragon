import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './styles/scss/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyBuBeeI5d8Nf6l3Dds3dqXJSTbJjutcja8",
  authDomain: "adaptativos.firebaseapp.com",
  databaseURL: "https://adaptativos.firebaseio.com",
  projectId: "adaptativos",
  storageBucket: "adaptativos.appspot.com",
  messagingSenderId: "54041218034"
})


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
