const config = {
  apiKey: "AIzaSyCOXA2_uDVfz886bBW-bBrtoqZf5LIbd5Y",
  authDomain: "deen-95f69.firebaseapp.com",
  projectId: "deen-95f69",
  storageBucket: "deen-95f69.appspot.com",
  messagingSenderId: "284276758844",
  appId: "1:284276758844:web:d46756487fe47705792639",
  measurementId: "G-4QZKVGFMVH"

};


let input = document.getElementById("name")

let con = document.querySelector(".namecon")

input.onchange = ()=>{
  con.style.display = "none"
  name(input.value)
}

function name(value){
  
  let username = value
  
firebase.initializeApp(config);
const db = firebase.database();

document.getElementById("send-message").addEventListener("submit", postChat);

function postChat(e) { e.preventDefault(); const timestamp = Date.now(); const chatTxt = document.getElementById("chat-txt"); const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({ usr: username, msg: message, }); }


const fetchChat = db.ref("messages/");

fetchChat.on("child_added", function(snapshot) {

  const messages = snapshot.val();

  var date = new Date()
  const msg =
    "<li>" + "<p class='name'> " + messages.usr + "</p>" + messages.msg + "<p class='ho'> " + date.getHours() + ":" + date.getMinutes() + "</p>" + "</li>";


  document.getElementById("messages").innerHTML += msg;
});
}
