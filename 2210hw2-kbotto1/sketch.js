function setup() {
  createCanvas(400,269);
  background(255, 204, 0);

  fill(225, 187, 165); //skin
  noStroke();
  beginShape();
  vertex(360, 0);
  vertex(400, 0);
  vertex(400, 269);
  vertex(360, 269);
  vertex(350, 230);
  vertex(320, 190);
  vertex(320, 120);
  vertex(335, 40);
  endShape();

  fill(0, 0, 0); //large black bar
  noStroke();
  rect(0, 60, 500, 10);

  fill(0, 0, 0);
  noStroke();
  rect(0, 218, 240, 5);

  fill(0, 0, 0);
  noStroke();
  rect(0, 250, 210, 3);

  fill(0, 0, 0);
  noStroke();
  rect(0, 264, 208, 3);

  beginShape(); //begin of hair
  vertex(360, 0); //top point
  vertex(320, 0);
  vertex(300, 30); //left side, goes down
  vertex(280, 80);
  vertex(283, 125);
  vertex(290, 150);
  vertex(310, 200);
  vertex(330, 221);
  vertex(360, 269); //bottom point
  vertex(370, 269);
  vertex(350, 230); //right side, goes up
  vertex(320, 190);
  vertex(320, 120);
  vertex(335, 40);
  endShape();

  beginShape(); //second hair
  vertex(250, 0); //top point
  vertex(210, 0);
  vertex(180, 55); //left side
  vertex(175, 100);
  vertex(187, 180);
  vertex(195, 210);
  vertex(210, 269); //bottom point
  vertex(225, 269);
  vertex(210, 210); //right side
  vertex(210, 160);
  vertex(220, 60);
  endShape();

  beginShape(); //corner triangle
  vertex(0, 0);
  vertex(0, 35);
  vertex(25, 0);
  endShape();

  beginShape(); //next to corner
  vertex(0, 90);
  vertex(0, 130);
  vertex(40, 40);
  vertex(70, 0);
  vertex(50, 0);
  vertex(25, 30);
  endShape();

  beginShape();

  vertex(320, 269);
  vertex(330, 269);
  vertex(300, 200);
  vertex(270, 180);

  endShape();

  beginShape(); //eyelash
  vertex(400, 143);
  vertex(400, 149);
  vertex(380, 155);
  endShape();

  fill(230) //top bar
  noStroke();
  rect(0, 5, 500, 10);


  strokeWeight(1)
  beginShape();
  vertex(0, 0);
  vertex(0, 0);
  endShape();

}

function draw() {


}
