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
        //text(json.mydata[i][key], ((1200*i)+80)-time, windowHeight/2);
        
        var depth = i*3200; 
        var long = json.mydata[i][key].length;
          
          
        for (var j = 0; j < long; j++){
          var letter = json.mydata[i][key].charAt(j);
         text(letter, (20*j)+(depth)-time, windowHeight/2);
        }   
       
      
          //console.log(long);
          
        }
    }
    
    //console.log(json.mydata.length);
   
}

function realtext(b) {
  
}