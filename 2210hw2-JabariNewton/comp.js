var a=0;
var canvasLimit=0;
var x = 0;
var y = 0;
var space = 4;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


function setup() {
  createCanvas(400, 269);
  background(255,255,255);

//Skin Color
beginShape();
fill(255,235,222);
  vertex(0,60);
  vertex(0,0);
  vertex(268,0);
  vertex(260,30);
  vertex(245,34);
  vertex(239,90);
  vertex(230,120);
  vertex(180,180);
  endShape();




  // Screentone Algorithm

for(a=0;canvasLimit < 10000;canvasLimit++){
  ellipse(x,y,(2/3),(2/3));
  x = x + (space);
  stroke(0);
    if(x>200){
      stroke(10,0,255);
        if(x>500){
          x=0;
          y = y+(4);
          space =4;
        }
    }
}
stroke(0,0,0,255);
beginShape();
fill(255,255,255);
vertex(240,50);
vertex(240,60);
vertex(400,60);
vertex(400,50);
endShape();

stroke(0);
fill(0);
beginShape();
  vertex(300,33);
  vertex(300, 30);
  vertex(400,30);
  vertex(400,33);
  endShape();


//White T
beginShape();
fill(255,255,255);
    vertex(200,269);
    vertex(0,90);
    vertex(0,60);
    vertex(165,129);
    vertex(200,118);
    vertex(250,269);
endShape();

//Tie Color
beginShape();
fill(255,0,0);
  vertex(170,175);
  vertex(92,128);
  vertex(110,106);
  vertex(155,129);
  vertex(160,125);
  vertex(175,175);
  vertex(320,269);
  vertex(200,269);
  endShape();

//**Jacket**
//Rightmost Jacket
beginShape()
fill(1,14,66);
  vertex(250,269);
  vertex(185,130);
  vertex(230,110);
  vertex(390,269);
endShape();
//LeftMost Jacket
beginShape();
fill(1,14,66);
  vertex(0,90);
  vertex(200,269);
  vertex(0,269);
endShape();
//Jacket Lines
beginShape();
fill(0);
  vertex(0,0);
  vertex(0,0);
endShape();
beginShape();
fill(0);
  vertex(0,100);
  vertex(0,85);
  vertex(200,269);
  vertex(190,269);
endShape();




//TIE

//Tail

//Crease Line
beginShape();
fill(0);
  vertex(50,170);
  vertex(60,160);
  vertex(107,100);
  vertex(116,105);
endShape();
//LeftMost
beginShape();
fill(0);
  vertex(100,120);
  vertex(90,127);
  vertex(225,205);
  vertex(245,240);

endShape();
//Rightmost Line
beginShape();
fill(0);
  vertex(170,130);
  vertex(160,130);

  vertex(205,269);
  vertex(180,269);

  vertex(165,178);
  vertex(170,170);
endShape();



//FirstLine
beginShape();
fill(0);

//Beginning Vertices
vertex(0, 60);
vertex(0, 45);

//BegChin
vertex(160, 129);
vertex(170,115);
//DividerChin

vertex(190,100);
vertex(198,105)

//firstBump
vertex(183,115)
vertex(163, 135);

endShape();

beginShape();
fill(0);
vertex(165,126);
vertex(170,130);

//second line
vertex(220,120);
vertex(235,115);

vertex(240,90);
vertex(218,115);
endShape();

beginShape();
fill(0);

//Top Vertex
vertex(261,0);
vertex(270,0);
//Mid Vertex
vertex(265,33);
vertex(260, 38);

vertex(200,30);
vertex(190,20);

vertex(220,40);
vertex(260,30);

endShape();

//the connector
beginShape();
vertex(245,30);
vertex(238,32);
//
vertex(240,91);
vertex(242,95);
endShape();

//Yellow Shit
beginShape();
fill(253,203,22);
  vertex(0,165);
  vertex(30,190);
  vertex(23,220);
  vertex(45,269);
  vertex(0,269);
endShape();






}
