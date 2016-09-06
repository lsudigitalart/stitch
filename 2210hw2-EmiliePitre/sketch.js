//Emilie Pitre #07

/*var a = 0;
var canLimit = 0;
var x = 0;
var y = 0;
*/

function setup() {
  createCanvas(400,269);
  background(249, 226, 218); //skin color

  //hair blue color (0, 3, 90)

  fill(0, 0, 0) //eyebrow
  beginShape();
    vertex(100, 190); //taper,outer brow
    vertex(150, 192);
    vertex(250, 185);
    vertex(267, 188);
    vertex(275, 192);
    vertex(265, 191);
    vertex(270, 195);
    vertex(283, 218);
    vertex(345, 255);
    vertex(350, 265);
    vertex(345, 269); //base
    vertex(270, 269); //base
    vertex(280, 260);
    vertex(250, 242);
    vertex(220, 210);
    vertex(180, 210)
  endShape();

  fill(0, 0, 0) //furrow
    beginShape();
      vertex(365, 269);
      vertex(380, 269);
      vertex(390, 250);
      vertex(395, 230);
      vertex(395, 225); //upper tip
      vertex(385, 245);
    endShape();

  fill(0, 0, 0); //forehead lines L>R,U>D
    strokeWeight(4);
    strokeCap(ROUND);
      line(360, 190, 370, 250);
      line(365, 185, 371, 245);
      line(370, 180, 375, 240);
      line(375, 175, 380, 220);
      line(382, 175, 383, 200);

  fill(0, 0, 0); //base hair
  noStroke();
  beginShape();
    vertex(0, 230); // bottom left corner
    vertex(7, 225);
    vertex(0, 225);
    vertex(15, 212);
    vertex(1, 208);
    vertex(25, 200);
    vertex(33, 193);
    vertex(70, 150);
    vertex(100, 130);
    vertex(115, 120)
    vertex(115, 115)
    vertex(125, 100);
    vertex(110, 102);
    vertex(134, 75);
    vertex(135, 65);
    vertex(139, 58);
    vertex(130, 55);
    vertex(141, 48);
    vertex(140, 45);
    vertex(120, 30); // corner of hairline
    vertex(180, 20);
    vertex(200, 19);
    vertex(235, 20);
    vertex(240, 18);
    vertex(220, 10);
    vertex(200, 5);
    vertex(250, 6);
    vertex(280, 10);
    vertex(325, 30);
    vertex(320, 20);
    vertex(370, 60);
    vertex(370, 55);
    vertex(400, 90); // widow's peak
    //canvas border:
    vertex(400, 0);
    vertex(0,0); //end border
  endShape();

  fill(0, 0, 0); //eyeball
    ellipse(200, 269, 90, 50);

  fill(249, 226, 218); //skin, upper eyelid
    noStroke();
    beginShape();
      vertex(150, 245);
      vertex(240, 240);
      vertex(260, 269)
      vertex(240, 269);
      vertex(230, 260)
      vertex(210, 255)
      vertex(200, 251);
    endShape();
    beginShape();
      vertex(150, 255);
      vertex(160, 269);
      vertex(150, 269);
    endShape();

  fill(0, 0, 0); //eyelid crease
    noStroke();
    beginShape();
      vertex(145, 260);
      vertex(160, 245);
      vertex(170, 241);
      vertex(190, 240);
      vertex(215, 250);
      vertex(250, 269);
      vertex(240, 269);
      vertex(200, 250);
      vertex(190, 247);
      vertex(180, 246);
      vertex(168, 250);
      vertex(165, 255);
      vertex(160, 260);
    endShape();


    beginShape(); //eyelashes
      vertex(145, 260); //bottombase
      vertex(135, 255);
      vertex(125, 245); //longestpoint
      vertex(145, 255);
      vertex(160, 255); //topbase
    endShape();

    beginShape(); //eyelashes
      vertex(140, 265); //bottombase
      vertex(130, 260);
      vertex(120, 250); //longestpoint
      vertex(140, 260);
      vertex(155, 265); //topbase
    endShape();


  noStroke();
  fill(0, 0, 0);
/*
//screentone Jabari
  for(a = 0; canLimit < 15000; canLimit++){
    ellipse(x, y, (1.5), (1.5));
    x = x + (4);
      if(x > 469){
        x = 0;
        y = y + 4;
      }
}
*/
  for(var y = 0; y <= height; y += 3) { //screentone w/ stagger
    for(var x = -305; x <= width; x += 6) {
      ellipse(x+y, y, 1.5, 1.5);
      }
    }

  fill(222, 222, 212); //eye highlights
    beginShape();
      vertex(190, 258);
      vertex(198, 260);
      vertex(193, 268);
      vertex(186, 265);
    endShape();
    beginShape();
      vertex(210, 262);
      vertex(213, 263);
      vertex(212, 269);
      vertex(207, 269);
    endShape();
    beginShape();
      vertex(217, 264);
      vertex(228, 269);
      vertex(217, 269);
    endShape();

  fill(0, 3, 90); //hair highlights
    beginShape(); //temple
      vertex(0, 90);
      vertex(20, 100)
      vertex(30,105);
      vertex(70, 116);
      vertex(110, 115);
      vertex(70, 140);
      vertex(50, 160);
      vertex(10, 170);
      vertex(50, 155);
      vertex(60, 140);
      vertex(10, 140);
      vertex(65, 122);
      vertex(20, 105)
      vertex(0, 95);
    endShape();

    beginShape(); //side
      vertex(0, 0);
      vertex(0, 80);
      vertex(25, 50);
      vertex(25, 0);
    endShape();

    beginShape();//forehead
      vertex(400, 0);
      vertex(400, 80);
      vertex(391, 80);
      vertex(395, 77);
      vertex(395, 50);
      vertex(375, 0);
      vertex(398, 30);
      vertex(390, 0);
    endShape();


}
