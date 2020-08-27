/**************************************************************
* Program: server.js
* Author: Sam Gay
* Date: 8/24/2020
* Purpose: RESTful API server to handle request for (hiking) 
* data. 
**************************************************************/

const http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded());
app.use(express.json());

var mysql = require('mysql');

app.listen(port, function(){
  console.log("Listening on Port: " + port);
});

//Hiking data//
//TODO - create db

//Format:
        //Hike Name
        //Location
        //Length
        //Comments
var hunter = {hike: "Hunter Trail", 
              location: "Picacho, AZ",
              length: "3.2 Miles",
              comment: "A fun trail to the top of Picacho Peak with a view of the I-10 Interstate and the surrounding valley. Little shade on the trail."};

var jug = {hike: "Jug Trail #61", location: "Salome Wilderness, AZ", length: "2", comment: "Super fun hike. Follow the trail in for 2 miles then drop into the canyon. Follow the water downstream (1 - 2 miles) while swimming, splashing, and riding the natural water slides until you come to the big jump off. From there it's either jump into the water below or repel. Swim the 1/4 mile out then hike back."};

var baldy = {hike: "Old Baldy Trail", location: "Mt. Wrightson, AZ", length: "8", comment: "A reasonably steep hike to the top of the mountian where you get an unobstructed 360 degree view."};

var clear = {hike: "West Clear Creak", location: "Camp Verde, AZ", length: "25", comment: "This is an in-water backpacking trip. Be prepared to soak everything and generally be wet the whole time."};

//Hiking endpoints//
app.get('/hunter', function(req, res){
  console.log("get hunter");
  res.send(hunter);
});

app.get('/jug', function(req, res){
  console.log("get jug");
  res.send(jug);
});

app.get('/baldy', function(req, res){
  console.log("get baldy");
  res.send(baldy);
});

app.get('/clear', function(req, res){
  console.log("get clear");
  res.send(clear);
});