var socket = io.connect("http://localhost:5000");

var userName = document.getElementById("userName");
var message = document.getElementById("message");
var send = document.getElementById("send");
var chat = document.getElementById("chat");
var broad = document.getElementById("broad");

send.addEventListener("click", () => {
  socket.emit("message", {
    userName: userName.value,
    message: message.value,
  });
  message.value = "";
});
message.addEventListener("keypress", () => {
  socket.emit("borad", {
    userName: userName.value,
  });
});
socket.on("new_msg", (data) => {
  broad.innerHTML = "";
  chat.innerHTML +=
    '<div class="container">' +
    "<strong>" +
    data.userName +
    ":</strong> " +
    data.message +
    "</div>";
});
socket.on("new_borad", (data) => {
  broad.innerHTML =
    "<strong>" +
    data.userName +
    ' is typing </strong><img class="img1" src="./write.gif" alt="" />';
});
