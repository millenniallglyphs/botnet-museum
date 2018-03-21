function setup() {
  createCanvas(windowWidth, windowHeight);
}

//console.log('yes');

var Twit = require('twit');
var config = require('./config');
var twitdate = 1;

//console.log(config);

var T = new Twit(config);

pulltweet();
//setInterval(pulltweet, 1000*10);
//dateback();
//setInterval(dateback, 1000*10);

function pulltweet(){
  console.log('pulled a tweet');
  
  var param = {
    q: 'botnet since:2018-03-01',
    count: 100
  }
  console.log(param);

  T.get('search/tweets', param, sendIt); 

  function sendIt(err, data, response) {
    var twitbot = data.statuses;
    var geog = data.statuses;
    for (var i = 0; i < twitbot.length; i++){
        console.log(data);
        //thebot = twitbot[i].text;
      }
    //console.log(twitbot);
    };
  
}
/*
function dateback() {
  twitdate++;
  console.log(twitdate);
}
*/

function draw() {
  
}
  