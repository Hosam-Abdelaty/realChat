var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(5000, () => {
  console.log("http://localhost:5000");
});

app.use(express.static("public_html"));

var sio = socket(server);

sio.on("connection", (visitor) => {
  console.log("we have anew vis as " + visitor.id);
  visitor.on("message", (data) => {
    sio.sockets.emit("new_msg", data);
  });
  visitor.on("borad", (data) => {
    visitor.broadcast.emit("new_borad", data);
  });
});
