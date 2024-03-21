let = browYpos = 60;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(133, 33, 33);
  
  strokeWeight(1);
  stroke(4, 8, 217);
  fill(255);
  
  
   //Ground Plane 
  fill(82, 49, 4);
  rect(0, 300, 400, 100);
  
  
  //body
  strokeWeight(4);
  fill(219, 11, 11);
  rect(100, 190, 200, 60);
  rect(180, 140, 40, 50);
  
  //arms
  strokeWeight(6);
  line(50, 100, 100, 200);
  line(350, 100 , 300, 200);
  
  //legs
  strokeWeight(4);
  rect(120, 250, 40, 50);
  rect(240, 250, 40, 50);
  
  //toes
  fill(252, 206, 0);
  rect(120, 280, 20, 20);
  rect(140, 280, 20, 20);
  rect(240, 280, 20, 20);
  rect(260, 280, 20, 20);
  
  //head
  fill(219, 11, 11);
  ellipse(200, 90, 100);
  
  //eyes
  fill(255, 255, 255);
  ellipse(150, 80, 20);
  ellipse(250, 80, 20);
  
  //mouth
  line(240, 100, 160, 100);
  
  //teeth
  rect(160, 100, 15, 20);
  rect(225, 100, 15, 20);
  
  //eyebrows
  fill(10, 10, 10);
  rect(125, browYpos, 50, 10);
  rect(225, browYpos, 50, 10);
  
  browYpos = browYpos - 0.5;
  console.log(browYpos);
  if (browYpos == 40)
    {
      browYpos = 60;
    }
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}