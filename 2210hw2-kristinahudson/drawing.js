function setup() {
  createCanvas(400, 269);
  background(0);
}

function draw() {
// White Curve
noStroke();
fill(255, 255, 255);
beginShape();
curveVertex(76, 56);
curveVertex(76, 56);
curveVertex(87, 76);
curveVertex(100, 84);
curveVertex(117, 84);
curveVertex(117, 84);
endShape();

//Top White box
noStroke();
fill(255, 255, 255);
beginShape();
vertex(76, 56);
vertex(400, 50);
vertex(400, 77);
vertex(102, 84);
endShape();

//Left White Rectangle
noStroke();
fill(255, 255, 255);
beginShape();
vertex(42, 56);
vertex(73, 56);
vertex(108, 269);
vertex(76, 269);
endShape();

//left white line
strokeWeight(4);
stroke(255, 255, 255, 255);
line(106, 235, 130, 269);

//right white line
strokeWeight(4)
stroke(255, 255, 255);
line(103, 211, 142, 269)

//Bottom Middle White Shape
fill(255, 255, 255);
beginShape();
vertex(203, 269);
vertex(197, 257);
vertex(194, 246);
vertex(199, 241);
vertex(219, 269);
endShape();

//Right White Shape
noStroke();
fill(255, 255, 255);
beginShape();
vertex(327, 269);
vertex(294, 229);
vertex(296, 216);
vertex(273, 189);
vertex(285, 164);
vertex(375, 269);
endShape();

//top of blue left Shape
noStroke();
fill(0, 11, 73);
beginShape();
vertex(0, 83);
vertex(29, 118);
vertex(37, 126);
vertex(37, 124);
vertex(48, 130);
vertex(57, 184);
vertex(45, 176);
vertex(19, 145);
vertex(13, 145);
vertex(19, 168);
vertex(16, 168);
vertex(5, 149);
vertex(1, 151);
vertex(7, 171);
vertex(0, 160);
endShape();

//black triangle in blue shape
noStroke();
fill(0);
triangle(0, 94, 22, 119, 0, 130);

//bottom blue shape
noStroke();
fill(0, 11, 73);
beginShape();
curveVertex(62, 214);
curveVertex(57, 216);
curveVertex(57, 225);
curveVertex(64, 232);
endShape();
beginShape();
vertex(66, 236);
vertex(50, 231);
vertex(58, 245);
vertex(0, 208);
vertex(0, 222);
vertex(52, 255);
vertex(50, 260);
vertex(0, 236);
vertex(0, 256);
vertex(9, 257);
vertex(18, 269);
vertex(16, 263);
vertex(20, 263);
vertex(27, 269);
vertex(72, 269);
endShape();

// Red box
noStroke();
fill(165, 1, 1);
beginShape();
vertex(0, 0);
vertex(0, 54);
vertex(400, 45);
vertex(400, 0);
endShape();

// Top Line
strokeWeight(7);
stroke(0);
line(0, 21, 400, 10);

// Bottom Line
strokeWeight(4);
stroke(0);
line(0, 47, 400, 36);
}
