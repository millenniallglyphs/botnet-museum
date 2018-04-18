var json;

function preload() {
	json = loadJSON("../twitdata.json");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
   
}

function draw() {
    background(0);
  
  var time = frameCount;
  textFont('Menlo');
  fill(250);
    for(var i = 0; i < json.mydata.length; i++) {
        for(key in json.mydata[i]){  
        text(json.mydata[i][key], ((1200*i)+80)-time, windowHeight/2);
        }
    }
    
    console.log(json.mydata.length);
   
}