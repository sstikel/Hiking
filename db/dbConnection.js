/***************************************************************************
 * Program: dbConnection.js
 * Author: Sam Gay
 * Date: 8/25/2020
 * Source: https://www.npmjs.com/package/mysql#establishing-connections
 *          https://www.w3schools.com/nodejs/nodejs_mysql.asp
 * Purpose: Connect to MYSQL db from hiking API (server.js).
 ***************************************************************************/

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "hiking",
  password: "hiking"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});