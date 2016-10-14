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

var server = app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});