var get;


function setup() {
  createCanvas(800,800);
  loadJSON("twitdata.json", gotData);

}


function gotData(data){
  console.log(data);
  get = data;
}



function draw() {
 if (get) {
  //console.log(get.number);
  for(var i =0; i < get.number; i ++){
    rect(40, 40, 40, 40);
  }
  
 }

  
}



console.log("hi");

