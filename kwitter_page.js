var firebaseConfig = {
      apiKey: "AIzaSyBaGErbTn5h7t0YH-Mryvk5hWA5hM38Wh8",
      authDomain: "kwitter-app-efa35.firebaseapp.com",
      databaseURL: "https://kwitter-app-efa35-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-efa35",
      storageBucket: "kwitter-app-efa35.appspot.com",
      messagingSenderId: "879298838709",
      appId: "1:879298838709:web:294c44645e60882b9bfefc"
    };
  
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
