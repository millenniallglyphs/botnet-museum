var tweet;
var symbolic = [' '];
var xhalf;
var yhalf;
var xten;
var yten;
var xlocal;
var ylocal;

function preload() {
  tweet = loadJSON("twitdata.json");
}

function setup() {
    createCanvas(2700, 3600);
    noLoop();
    textFont('Menlo');
    frameRate(10);
    xlocal = Math.floor(random((windowWidth/10)/2));
    ylocal = Math.floor(random(windowHeight/10));
  
}

function draw() {
var stat = tweet.statuses;


console.log(stat);
  
 
  
  //botnet();
  trial();
}


function trial() {
for (i = 0; i < tweet.statuses.length; i++){
  var texto = tweet.statuses[i].text;
  var popular = tweet.statuses[i].retweet_count;
   for (x = 0; x < texto.length; x++) {
     textSize((popular+4)*30);
     text(texto[x], ((popular*2)*20)*x, ((100+popular)*i)+100);
   }
}
}



