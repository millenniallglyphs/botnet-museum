var fs = require('fs');


//server requirements

var express = require('express');

var app = express();


//twiiter api requirements

var Twit = require('twit');
var config = require('./config');


//twitter function


var T = new Twit(config);
//parameters for twitter search
var param = {
  q: 'botnet',
  count: 10
}
//twiiter pull
T.get('search/tweets', param, thewords); 
 
function thewords(err, data, response) {
  var twiit = {};
  var twitbot = data.statuses;
  for (var i = 0; i < twitbot.length; i++){
    
  //places tweet in object  
     twiit['twee' + i] = twitbot[i].text;
   
  //write to JSON to public folder
  fs.writeFile('twitdata.json', JSON.stringify(twiit), finished);
    console.log("this is my json" + " " + twiit);
    console.log(twitbot[i].text);
  }
  
}
//writefile callback
function finished(err) {
  console.log('good to go');
}


//server

var server = app.listen(3000);

//p5 sketch in public
app.use(express.static('public'));
console.log("my socket server is running");