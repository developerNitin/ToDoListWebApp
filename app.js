// jshint esversion: 6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();


  var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", option);

  res.render("list", {
    Day: day
  });

  app.post("/", function(req, res) {
    var item = req.body.newItem;
    res.render("list", {
      newItem: item
    });
  });
});









app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

// :------>

// var currentDay = today.getDay();
// var day = "";

// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "oops! error";
// }

// if(currentDay === 6 || currentDay === 0) {
//   day = "weekend";
// } else {
//   day = "weekday";
// }
