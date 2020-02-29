// jshint esversion: 6

const express = require("express");
const bodyparser = require("body-parser");
const ejsLint = require('ejs-lint');
const date = require(__dirname + "/date.js");
const app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


let items = [];
let workItem = [];


app.get("/", function(req, res) {
  let day = date();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});


app.post("/", function(req, res) {
  let item = req.body.newItems;
  
  if (req.body.list === "WorkList") {
    workItem.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});


app.get("/work", function(req, res) {

  res.render("list", {
    listTitle: "WorkList",
    newListItems: workItem
  });
});


app.get("/about", function(req, res) {
  res.render("about");
});









app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
