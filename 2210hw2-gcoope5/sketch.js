function setup() {
  createCanvas(400,269,WEBGL);
}

function draw() {
  background (234,234,242);

  fill(50);
    push();
    rect(-200,-140,1000,60);
    pop();


    push();
    fill(50);
    rotateZ(degrees(137));
    rect(-240,60,1000,20);
    pop();

    push();
    fill(250);
    rotateZ(degrees(133));
    rect(-930,-90,1000,20);
    pop();

    push();
    fill(50);
    rotateZ(degrees(133));
    rect(-800,30,1000,5);
    pop();

    push();
    fill(50);
    rotateZ(degrees(133));
    rect(-800,0,1000,5);
    pop();

    push();
    fill(50);
    rotateZ(degrees(133));
    rect(-800,-10,1000,5);
    pop();

    push();
    fill(50);
    rotateZ(degrees(133));
    rect(-800,0,1000,5);
    pop();

    push();
    fill(50);
    rect(-180,90,80,10);
    pop();

    push();
    fill(255,212,154);
    rect(-270,-80,100,200);
    pop();

    push();
    fill(250);
    rotateZ(degrees(137));
    rect(-240,170,1000,50);
    pop();

    push();
    strokeWeight(10);
    stroke(50);
    fill(250);
    rotateZ(degrees(141));
    translate(10,0);
    rect(-200,70,1000,50);
    pop();



}
