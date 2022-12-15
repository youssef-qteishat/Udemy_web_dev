const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//requiring local node module
const date = require(__dirname + "/date.js");

// in javascript you can push elements into an array and still have it be constant
// but you cant assign a const array to an entirely new array. the same concept applies to objects
const items = ["Do Homework", "Workout"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// runs styles folder a sa static resource
app.use(express.static("public"));
app.get("/",function(req, res){
  // binds exports of getDay or getDate from module date.js to day
  let day = date.getDate();
  // let day = date.getDay();

  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){

  let item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item)
    //redirects to work route
    res.redirect("/work")
  } else{
    items.push(item);
    //redirects to home route
    res.redirect("/")
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res){
  res.render("about");
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
