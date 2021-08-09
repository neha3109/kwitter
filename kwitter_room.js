
//ADD YOUR FIREBASE LINKS

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC6u39OUX6vCkPuPNWFHy0Dufjs4IzSWgc",
    authDomain: "kwitter-app-5c52e.firebaseapp.com",
    databaseURL: "https://kwitter-app-5c52e-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-5c52e",
    storageBucket: "kwitter-app-5c52e.appspot.com",
    messagingSenderId: "288483093551",
    appId: "1:288483093551:web:d68820f65fd23479862ada"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
