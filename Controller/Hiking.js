/**************************************************************
* Program: Hiking.js
* Author: Sam Gay
* Date: 8/23/2020
* Purpose: Handle data returned from server and display to user.
**************************************************************/

//query server for data//
function queryAPI(input){
  //query API - Source: https://www.w3schools.com/xml/xml_http.asp
  //TODO - link to API
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //return object
       return this.response;
    }
  };
  //TODO - read up on requesting data from server
  xhttp.open("GET", input, true);
  xhttp.send();
}

//
function selectHike(input){
  var hike = queryAPI(input);

  if(hike != null){
    //TODO - output hike info
      //Format:
        //Hike Name
        //Location
        //Length
        //Comments
    document.getElementById("display").innerHTML = hike;
  }
  else{
    document.getElementById("display").innerHTML = "The hike you selected does not have any info. Please click a different hike.";
  }
}