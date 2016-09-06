//Jessica Le #14

function setup() {
  createCanvas(400,269);
  background(200);

  //flesh color block
  fill(212,184,173);
  rect(0,0,400,269);

  //black shape starting at top right
  fill(2,2,2); //black
  beginShape();
  vertex(0,10);
  vertex(90,7);
  vertex(165,40);
  vertex(200,75);
  vertex(220,120);
  vertex(300,110);
  vertex(370,80);
  vertex(390,40);
  vertex(390,20);
  vertex(370,0); //top of the screen
  vertex(385,0);
  vertex(400,18);
  vertex(400,269);
  vertex(0,269);
  endShape();

  //yellow shape starting at top left
  fill(252,200,19); //yellow
  beginShape();
  vertex(0,20);
  vertex(90,17);
  vertex(160,50);
  vertex(195,85);
  vertex(200,100);
  vertex(190,115); //begin left turn
  vertex(190,140);
  vertex(200,170);
  vertex(160,175); //begin left turn
  vertex(155,190);
  vertex(160,210); //tail of black spot
  vertex(175,210);
  vertex(175,195);
  vertex(190,195);
  vertex(230,210);
  vertex(260,240);
  vertex(270,262);
  vertex(280,269);
  vertex(0,269);
  endShape();

  //teeny weeny yellow spot next to giant yellow
  beginShape();
  vertex(212,120);
  vertex(225,135);
  vertex(210,133);
  endShape();

  //yellow shape on the right
  beginShape();
  vertex(305,120);
  vertex(325,115);
  vertex(350,130); //begin black blob
  vertex(345,140);
  vertex(335,135);
  vertex(320,150);
  vertex(320,180);
  vertex(335,190); //center of hourglass black blob
  vertex(335,205);
  vertex(330,210);
  vertex(335,225);
  vertex(360,235);
  vertex(380,230);
  vertex(400,220);
  vertex(400,269);
  vertex(320,269);
  vertex(310,255);
  vertex(313,180);
  endShape();

  //baby yellow triangle next to black hourglass
  beginShape();
  vertex(355,195);
  vertex(380,180);
  vertex(390,160);
  vertex(400,190);
  vertex(400,195);
  vertex(380,192);
  endShape();

  //begin blue shape
  fill(3,6,80);
  beginShape();
  vertex(340,110);
  vertex(370,95);
  vertex(400,120);
  vertex(400,160);
  endShape();

  //begin white shape
  fill(232,228,216);
  beginShape();
  vertex(380,90);
  vertex(390,80);
  vertex(400,85);
  vertex(400,110);
  endShape();

  //cheetah print
  fill(2,2,2);
  //left blob
  beginShape();
  vertex(50,28);
  vertex(96,50);
  vertex(61,67);
  vertex(85,102);
  vertex(66,119);
  vertex(23,96);
  vertex(17,55);
  endShape();

  //right blob
  beginShape();
  vertex(113,42);
  vertex(149,61);
  vertex(161,83);
  vertex(156,115);
  vertex(122,143);
  vertex(89,124);
  vertex(92,96);
  vertex(122,79);
  vertex(101,54);
  endShape();

  beginShape();
  vertex(0,46);
  vertex(11,58);
  vertex(5,81);
  vertex(0,89);
  endShape();

  beginShape();
  vertex(0,114);
  vertex(24,124);
  vertex(31,134);
  vertex(0,128);
  endShape();

  beginShape();
  vertex(0,192);
  vertex(20,210);
  vertex(18,236);
  vertex(0,241);
  endShape();

  beginShape();
  vertex(62,148);
  vertex(99,167);
  vertex(104,183);
  vertex(74,182);
  vertex(91,192);
  vertex(95,207);
  vertex(72,207);
  vertex(44,189);
  vertex(38,175);
  vertex(46,155);
  endShape();

  beginShape();
  vertex(38,197);
  vertex(68,214);
  vertex(68,225);
  vertex(57,226);
  vertex(31,212);
  endShape();

  beginShape();
  vertex(112,179);
  vertex(135,192);
  vertex(146,215);
  vertex(144,237);
  vertex(98,219);
  endShape();

  beginShape();
  vertex(80,269);
  vertex(73,260);
  vertex(94,243);
  vertex(130,269);
  endShape();

  beginShape();
  vertex(157,269);
  vertex(140,245);
  vertex(157,241);
  vertex(195,259);
  vertex(214,223);
  vertex(224,227);
  vertex(238,262);
  vertex(247,262);
  vertex(258,269);
  endShape();

}

function draw() {


}
