// jshint esversion: 6
 const bodyparser = require("body-parser");
 const express = require("express");

 app = express();

 app.get("/" + function(req, res) {
   res.send("Hello there!");
 });


















 app.listen(3000, function() {
   console.log("Server is running on port 3000");
 });
