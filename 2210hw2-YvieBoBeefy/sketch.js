// Katie Wilson #16

function setup() {
  createCanvas(400,269);
  background(179, 181, 195);

  fill(238, 217, 208)
      strokeWeight(10);

      beginShape();
        vertex(230, 220);
          quadraticVertex(270, 215, 280, 215);
          quadraticVertex(320, 215, 320, 265);
          quadraticVertex(290, 275, 290, 295);
        vertex(295, 279);
      endShape();

      beginShape();
        vertex(50, 269);
          quadraticVertex(60, 236, 90, 240);
        vertex(190, 272);
      endShape();

      beginShape();
        vertex(90, 239);
          quadraticVertex(100, 183, 133, 183);
          quadraticVertex(270, 239, 283, 269)
        vertex(270, 289);
      endShape();

  fill(0);

      beginShape();
        vertex(220, 220);
          quadraticVertex(245, 100, 400, 22);
        vertex(400, 22);
        vertex(400, 80);
          quadraticVertex(390, 90, 360, 90);
          quadraticVertex(350, 140, 300, 140);
          quadraticVertex(290, 200, 260, 200);
          quadraticVertex();
        vertex(250, 239);
        endShape();

    strokeWeight(25);
      line(360, 0, 405, 269);

    strokeWeight(20)
      line(300, 0, 405, 120);

  fill(0);
      noStroke();
      rect(0, 40, 170, 3);
      rect(0, 130, 180, 10);

  fill(230, 231, 223);
    rect(0, 65, 170, 8);

    beginShape();
      vertex(350, 108);
      vertex(360, 77);
      vertex(361, 76);
      vertex(369, 75);
    endShape();

    beginShape();
      vertex(290, 145);
      vertex(295, 140);
      vertex(290, 163);
    endShape();

    beginShape();
      vertex(248, 222);
      vertex(248, 235);
      vertex(242, 232);
    endShape();

  fill(0);

    beginShape();
      vertex(155, 0);
      vertex(165, 0);
      vertex(205, 269);
      vertex(195, 269);
    endShape();

    beginShape();
      vertex(190, 0);
      vertex(200, 0);
      vertex(240, 269);
      vertex(230, 269);
    endShape();

  fill(230, 231, 223);
     noStroke();
      beginShape();
        vertex(163, 0);
        vertex(193, 0);
        vertex(233, 269);
        vertex(203, 269);
      endShape();
}

function draw() {

}
