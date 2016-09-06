function setup() {
  createCanvas(400,269);
  background(219, 223, 226);
}
function draw () {
stroke(0);
strokeWeight(7);
line(400, 200, 0, 250);

fill(1, 11, 70);
beginShape();
vertex (0,100);
vertex (0,20);
vertex (80,130);
vertex (0,130);
curveVertex(0, 200);
endShape();

fill(233,204,200);

ellipse(270, -10, 45, 45);

ellipse(250, 30, 70, 90);

beginShape()
vertex (160, 170);
curveVertex (290, 100);
vertex (242, 30);
curveVertex (100, 120);
vertex (230,140);
endShape()

beginShape();
vertex (-650, -700);
vertex (185, -1);
curveVertex (59, 85);
vertex (63, -10);
vertex (130, 5);
endShape();

strokeWeight (0);

ellipse (150, 100, 200, 70);

ellipse (82, 76, 100, 40);

ellipse (140, 80, 100, 40);

strokeWeight (11);

beginShape();
vertex (10,-100);
vertex (30, 65);
curveVertex (20, 160);
curveVertex (230, 130);
vertex (0, 0);
endShape();

beginShape();
vertex (20, 140);
curveVertex (35, 59);
vertex (240, 80);
vertex (-100, 10);
endShape ();

strokeWeight (7);

fill(0);
triangle(410, 0, 390, 00, 400, 60);

rectMode(RADIUS);
fill(223, 219, 216);
rect(350, 130, 100, 32);

quad(224, 140, 192, -10, 232, -10, 263, 140);

rectMode(RADIUS);
fill(173, 0, 0);
rect(0, 211, 410, 80);

stroke(0);
strokeWeight(8);
line(400, 172.8, 0, 172.8);

stroke(0);
strokeWeight(7);
line(400, 207, 0, 207);

}
