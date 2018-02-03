/*
  Based on 'chat-example' by Mostafa Eweda <mo.eweda@gmail.com>.
  "A chat example to showcase how to use `socket.io` with a static `express` server with `async` for control flow."
*/

var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

var serverHost = process.env.IP || "localhost";
var serverPort = process.env.PORT || "3000";

router.use("/js", express.static(path.resolve(__dirname, "client", "js")));
router.use("/css", express.static(path.resolve(__dirname, "client", "css")));

router.all("/*", function (req, res, next) {
  
  res.sendFile("client/index.html", { "root": __dirname });
});

var messages = [];
var sockets = [];

io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

server.listen(serverPort, serverHost, function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
