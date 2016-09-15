 var config = {
    apiKey: "AIzaSyBFAOdM8NhXt2WV1kH1Whkv_k5xa8L3ZD0",
    authDomain: "train-hw.firebaseapp.com",
    databaseURL: "https://train-hw.firebaseio.com",
    storageBucket: "train-hw.appspot.com",
    messagingSenderId: "129653901205"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();

var name = "";
var destination = "";
var frequency = "";
var arrival = "";
var minutes = "";