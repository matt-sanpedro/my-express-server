// jshint esversion:6

const express = require('express');

// function that represents the express module, bind that to a word "app"
const app = express();

// what happens when client makes get request
app.get('/', function(req, res) {
  // console.log(request);
  res.send("<h1>Hello Batman</h1>")
})

app.get('/batman', function(req, res) {
  // console.log(request);
  res.send("<h1>Hello Robin</h1>")
})

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
