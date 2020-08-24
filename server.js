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

app.listen(port, function(){
  console.log("Listening on Port: " + port);
});

//Hiking data//
//Format:
        //Hike Name
        //Location
        //Length
        //Comments
var hunter = {hike: "Hunter Trail", 
              location: "Picacho, AZ",
              length: "3.2 Miles",
              comment: "A fun trail to the top of Picacho Peak with a view of the I-10 Interstate and the surrounding valley. Little shade on the trail."};

var jug = {hike: "Jug Trail #61", location: "Salome Wilderness, AZ", length: "", comment: ""};

var baldy = {hike: "Old Baldy Trail", location: "Mt. Wrightson, AZ", length: "", comment: ""};

var clear = {hike: "West Clear Creak", location: "Camp Verde, AZ", length: "", comment: ""};

//Hiking endpoints//
app.get("/hunter", function(req, res){
  res.json(hunter);
});

// app.get("/jug", ???);

// app.get("/baldy", ???);

// app.get("/clear", ???);