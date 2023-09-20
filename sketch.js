function setup() {
  createCanvas(400, 800);
  noLoop();
}

function draw() {
  background(220);

  colorMode(HSB,360,128,128,[100]);
  noStroke();

  //Top Rectangles - Base
  fill(20,128,128,50);
  rect(0,0,200,200);

  fill(20,128,64,50);
  rect(200,0,200,200);

  //Bottom Rectangles - Base

  fill(20,64,128,50);
  rect(0,200,200,200);

  fill(120,128,64,40);
  rect(200,200,200,200);

  //Cut out Rectangles - Top
  fill(200,128,128,50);
  rect(100,100,100,100);

  fill(200,128,64,50);
  rect(200,100,100,100);

  //Cut out Rectangles - Base
  fill(200,64,128,50);
  rect(100,200,100,100);

  fill(300,128,64,40);
  rect(200,200,100,100);

  //Bottom Pain
  //Top Rectangles - Base
  translate(0,400);
  fill(220,64,128,50);
  rect(0,0,200,200);

  fill(120,128,64,50);
  rect(200,0,200,200);

  //Bottom Rectangles - Base

  fill(120,64,128,50);
  rect(0,200,200,200);

  fill(220,128,64,40);
  rect(200,200,200,200);

  //Cut out Rectangles - Top
  fill(300,64,128,50);
  rect(100,100,100,100);

  fill(300,128,64,50);
  rect(200,100,100,100);

  //Cut out Rectangles - Base
  fill(300,64,128,50);
  rect(100,200,100,100);

  fill(40,128,64,40);
  rect(200,200,100,100);

}
