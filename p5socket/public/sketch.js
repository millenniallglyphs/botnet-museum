var get;


function setup() {
  createCanvas(800,800);
  loadJSON("twitdata.json", gotData);

}

//function calling JSON file
function gotData(data){
  console.log(data);
  // the problem is I can consol.log the data, but when I try to use it in the sketch, it returns as 'undefined'
  get = data;
}



function draw() {
 if (get) {
  //get.number returns as 'undefined'
  for(var i =0; i < get.number; i ++){
    rect(40, 40, 40, 40);
  }
  
 }

  
}



