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

$("#submit").on("click", function(){

	name = $("#trainNameInput").val().trim();
	destination = $("#destinationInput").val().trim();
	frequency = $("#frequencyInput").val().trim();
	arrival = $("#firstTrainInput").val().trim();

	database.ref().push({
		name: name,
		destination: destination,
		frequency: frequency,
		arrival: arrival,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

		return false;
});


database.ref().on("child_added", function(snapshot){

	name = (snapshot.val().name);
	destination = (snapshot.val().destination);
	frequency = (snapshot.val().frequency);
	arrival = (snapshot.val().arrival);

	console.log(snapshot.val().name);
	console.log(snapshot.val().destination);
	console.log(snapshot.val().frequency);
	console.log(snapshot.val().arrival);

	$("#trainTable > tbody").append(
		"<tr><td>" + name +
		"</td><td>" + destination +
		"</td><td>" + frequency +
		"</td><td>" + arrival + 
		"</td><td></td></tr>"
		);	

});


