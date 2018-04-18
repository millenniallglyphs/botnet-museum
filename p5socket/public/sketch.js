var json;

function preload() {
	json = loadJSON("twitdat2.json");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
   
}

function draw() {
    background(0);
  
  var time = frameCount;
  textFont('Menlo');
  fill(250);
    for(var i = 0; i < json.info.length; i++) {
        for(key in json.info[i]){  
        text(json.info[i][key], ((1200*i)+80)-time, windowHeight/2);
        }
    }
    
    console.log(json.info.length);
   
}