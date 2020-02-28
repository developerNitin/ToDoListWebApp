// jshint esversion: 6

 const express = require("express");
 const bodyparser = require("body-parser");

 const app = express();

 app.use("view engine", "ejs");

 app.get("/", function(req, res) {
   res.write("Hello there!");
   res.send();
 });









 app.listen(3000, function() {
   console.log("Server is running on port 3000");
 });
