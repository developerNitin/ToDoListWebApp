// jshint esversion: 6

 const express = require("express");
 const bodyparser = require("body-parser");

 const app = express();

 app.set('view engine', 'ejs');

 app.get("/", function(req, res) {
   var today = new Date();
   var currentDay = today.getDay();
   var day = "";

   if(currentDay === 6 || currentDay === 0) {
     day = "weekend";
   } else {
     day = "weekday";
   }

   res.render("list", {Day: day});

 });









 app.listen(3000, function() {
   console.log("Server is running on port 3000");
 });
