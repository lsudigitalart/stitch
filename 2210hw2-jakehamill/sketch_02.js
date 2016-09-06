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
  fill(255);
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

  fill(50);
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

  fill(50);
  beginShape();
  vertex(195,130);
  vertex(193,135);
  vertex(190,138);
  vertex(170,155);//bottombelow eyebrow
  vertex(170,152);
  vertex(185,133);
  vertex(190,131);
  endShape();

  fill(50);
  beginShape();
  vertex(172,168);
  vertex(175,164);
  vertex(177,167);
  vertex(183,193);//bottom of top eyelash
  vertex(177,193);
  endShape();

  fill(50);
  beginShape();
  vertex(172,168);
  vertex(175,164);
  vertex(177,167);
  vertex(183,193);//bottom of top eyelash
  vertex(177,193);
  endShape();

  fill(50);
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














}
