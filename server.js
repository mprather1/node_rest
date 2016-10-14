var express = require("express");
var app = express();
var fs = require("fs");

user = {
  "user3" : {
    "name" : "Adolf Hitler",
    "password" : "HitlerDidNothingWrong",
    "id" : 3
  }
};

app.get("/listUsers", function(req, res){
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
    console.log(data);
    res.end(data);
  });
});

app.get("/addUser", function(req, res){
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
    data = JSON.parse(data);
    data["user3"] = user["user3"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.get("/users/:id", function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

var id = 1;

app.get("/deleteUser", function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
        data = JSON.parse(data);
        delete data["user" + id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});