var a = 0;
var canLimit = 0;
var x = 0;
var y = 0;

function setup () {
  createCanvas(400,269);

  //screentone
    noStroke();
    fill(10,200,10,100);
    for(a = 0; canLimit < 15000; canLimit++){
      ellipse (x, y, (2), (2));
      x = x + (3);
        if(x > 500){
         x = 0;
         y = y + 4;
        }
}


noStroke();
  fill(180);
  beginShape();
  vertex(0,68);
  vertex(0,75);
  vertex(37,74);
  vertex(40,68);
  vertex(34,69);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(0,68);
  vertex(0,75);
  vertex(37,74);
  vertex(40,68);
  vertex(34,69);
  endShape();

  fill(180);
  beginShape(); //eyebrow
  vertex(0,159);
  vertex(0,153);
  vertex(35,140);
  vertex(45,133);
  vertex(100,105); //top peak eyebrow
  vertex(105,105);
  vertex(124,110);
  vertex(193,110);
  vertex(200,113); //right end of eyebrow
  vertex(183,128);
  vertex(165,135);//botomrt eyebrow
  vertex(140,135);
  vertex(98,128);//midbottom eyebrow
  vertex(87,134);
  vertex(50,148);
  vertex(35,150);
  endShape();
  fill(0,75,255,140);
  beginShape(); //eyebrow
  vertex(0,159);
  vertex(0,153);
  vertex(35,140);
  vertex(45,133);
  vertex(100,105); //top peak eyebrow
  vertex(105,105);
  vertex(124,110);
  vertex(193,110);
  vertex(200,113); //right end of eyebrow
  vertex(183,128);
  vertex(165,135);//botomrt eyebrow
  vertex(140,135);
  vertex(98,128);//midbottom eyebrow
  vertex(87,134);
  vertex(50,148);
  vertex(35,150);
  endShape();

  fill(180);
  beginShape();
  vertex(195,130);
  vertex(193,135);
  vertex(190,138);
  vertex(170,155);//bottombelow eyebrow
  vertex(170,152);
  vertex(185,133);
  vertex(190,131);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(195,130);
  vertex(193,135);
  vertex(190,138);
  vertex(170,155);//bottombelow eyebrow
  vertex(170,152);
  vertex(185,133);
  vertex(190,131);
  endShape();

  fill(180);
  beginShape();
  vertex(172,168);
  vertex(175,164);
  vertex(177,167);
  vertex(183,193);//bottom of top eyelash
  vertex(177,193);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(172,168);
  vertex(175,164);
  vertex(177,167);
  vertex(183,193);//bottom of top eyelash
  vertex(177,193);
  endShape();

  fill(180);
  beginShape();
  vertex(172,168);
  vertex(175,164);
  vertex(177,167);
  vertex(183,193);//bottom of top eyelash
  vertex(177,193);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(172,168);
  vertex(175,164);
  vertex(177,167);
  vertex(183,193);//bottom of top eyelash
  vertex(177,193);
  endShape();

  strokeWeight();
  fill(255);
  ellipse(174,229,20,34);//eyeball
  fill(70);
  ellipse(178,228,12,26);

  fill(180);
  beginShape();
  vertex(55,223);//lfteye
  vertex(78,226);
  vertex(105,225);
  vertex(125,221);
  vertex(138,216);
  vertex(158,199);
  vertex(180,192);//stemthing
  vertex(189,194);
  vertex(198,194);
  vertex(205,192);
  vertex(209,190);
  vertex(213,187);//topeyelash
  vertex(213,189);
  vertex(208,198);
  vertex(214,196);
  vertex(220,192);
  vertex(219,195);
  vertex(215,200);
  vertex(213,201);
  vertex(220,201);
  vertex(228,198);
  vertex(227,201);
  vertex(218,207);
  vertex(224,207);
  vertex(234,205);//bttmeyelash
  vertex(225,212);
  vertex(216,215);
  vertex(200,218);
  vertex(180,219);
  vertex(164,218);//midbottom eyelash
  vertex(142,230);
  vertex(120,235);
  vertex(100,234);
  vertex(80,231);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(55,223);//lfteye
  vertex(78,226);
  vertex(105,225);
  vertex(125,221);
  vertex(138,216);
  vertex(158,199);
  vertex(180,192);//stemthing
  vertex(189,194);
  vertex(198,194);
  vertex(205,192);
  vertex(209,190);
  vertex(213,187);//topeyelash
  vertex(213,189);
  vertex(208,198);
  vertex(214,196);
  vertex(220,192);
  vertex(219,195);
  vertex(215,200);
  vertex(213,201);
  vertex(220,201);
  vertex(228,198);
  vertex(227,201);
  vertex(218,207);
  vertex(224,207);
  vertex(234,205);//bttmeyelash
  vertex(225,212);
  vertex(216,215);
  vertex(200,218);
  vertex(180,219);
  vertex(164,218);//midbottom eyelash
  vertex(142,230);
  vertex(120,235);
  vertex(100,234);
  vertex(80,231);
  endShape();

  fill(180);
  beginShape();
  vertex(100,233);
  vertex(130,233);
  vertex(150,245);
  vertex(185,245);
  vertex(195,240);//toplowereyelashrt
  vertex(208,247);
  vertex(210,252);//bttmrtlowereyelsh
  vertex(185,255);
  vertex(148,251);
  vertex(125,238);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(100,233);
  vertex(130,233);
  vertex(150,245);
  vertex(185,245);
  vertex(195,240);//toplowereyelashrt
  vertex(208,247);
  vertex(210,252);//bttmrtlowereyelsh
  vertex(185,255);
  vertex(148,251);
  vertex(125,238);
  endShape();

  fill(180);
  beginShape();
  vertex(220,0);
  vertex(230,0);
  vertex(268,52);
  vertex(285,113);
  vertex(277,140);
  vertex(278,168);
  vertex(295,208);
  vertex(325,235);
  vertex(398,269);//bottomrt
  vertex(384,269);
  vertex(320,240);
  vertex(290,213);
  vertex(270,170);
  vertex(269,140);
  vertex(277,113);//midlft
  vertex(260,55);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(220,0);
  vertex(230,0);
  vertex(268,52);
  vertex(285,113);
  vertex(277,140);
  vertex(278,168);
  vertex(295,208);
  vertex(325,235);
  vertex(398,269);//bottomrt
  vertex(384,269);
  vertex(320,240);
  vertex(290,213);
  vertex(270,170);
  vertex(269,140);
  vertex(277,113);//midlft
  vertex(260,55);
  endShape();

  fill(180);
  beginShape();
  vertex(230,0);
  vertex(400,0);
  vertex(400,255);//bottomrt
  vertex(394,262);
  vertex(388,263);
  vertex(382,264);
  vertex(350,250);//bttmear
  vertex(350,230);
  vertex(340,220);
  vertex(328,205);
  vertex(315,210);
  vertex(328,195);
  vertex(335,175);
  vertex(335,150);
  vertex(334,137);
  vertex(330,130);//topbackear
  vertex(325,120);
  vertex(310,113);
  vertex(298,111);
  vertex(285,113);//topfront
  vertex(268,52);
  endShape();
  fill(0,75,255,140);
  beginShape();
  vertex(230,0);
  vertex(400,0);
  vertex(400,255);//bottomrt
  vertex(394,262);
  vertex(388,263);
  vertex(382,264);
  vertex(350,250);//bttmear
  vertex(350,230);
  vertex(340,220);
  vertex(328,205);
  vertex(315,210);
  vertex(328,195);
  vertex(335,175);
  vertex(335,150);
  vertex(334,137);
  vertex(330,130);//topbackear
  vertex(325,120);
  vertex(310,113);
  vertex(298,111);
  vertex(285,113);//topfront
  vertex(268,52);
  endShape();



















}
