
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDugUZh1BLgrwUFJpuGKFt--tVHyYw2vsE",
      authDomain: "kwitter-cfa90.firebaseapp.com",
      databaseURL: "https://kwitter-cfa90-default-rtdb.firebaseio.com",
      projectId: "kwitter-cfa90",
      storageBucket: "kwitter-cfa90.appspot.com",
      messagingSenderId: "371312300282",
      appId: "1:371312300282:web:1a51f6eb8f8c4455603943"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //End code
      });});}
getData();
