function setup() {
  createCanvas(400, 269);
}

function draw() {
  background(240);
//stright lines
  stroke(0);
  strokeWeight(2);
  line(350, 100, 400, 100);

  stroke(0);
  strokeWeight(5);
  line(350, 180, 400, 180);

  stroke(0);
  strokeWeight(10);
  line(300, 260, 400, 260);
//Lines below eye
  stroke(0);
  strokeWeight(2);
  line(250, 60, 255, 80);

  stroke(0);
  strokeWeight(2);
  line(252, 58, 257, 78);

  stroke(0);
  strokeWeight(2);
  line(247, 62, 252, 82);

  stroke(0);
  strokeWeight(2);
  line(244, 65, 249, 85);

  line(0);
  strokeWeight(2);
  line(241, 68, 246, 88);
//The mouth
  noFill();
  stroke(0);
  strokeWeight(5);
  beginShape();
  vertex(300, 260);
  vertex(285, 269);
  vertex(285, 269);
  vertex(175, 230)
  endShape();
//nose
  strokeWeight(8);
  line(180, 220, 170, 240);
  beginShape();
  vertex(300, 1);
  vertex(297, 15);
  vertex(355, 172);
  vertex(335, 193);
  vertex(310, 193);
  endShape()

  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(300, 180, 16, 4);
  line(300, 150, 285, 145);
  line(295, 153, 282, 147);
  line(292, 156, 279, 150);
  line(289, 160, 276, 153);

  beginShape();
  curveVertex(300, 180);
  curveVertex();
  curveVertex();
  curveVertex();curveVertex();
  curveVertex();
  endShape();


  //curve lines
  noFill();
  stroke(0);
  strokeWeight(8);
  beginShape();
  curveVertex(330, 193);
  curveVertex(300, 260);
  //length of line
  curveVertex(310, 193);
  curveVertex(325, 250);
  endShape();

//Eyes
ellipse(305, 15, 5, 8);




}
