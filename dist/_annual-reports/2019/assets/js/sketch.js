var contador = 0;
var dato = 1;
var rodatnoc = 0;
var otad = 1;
let hue = 0;


var num = 333;
var x = new Array([num]);
let y = new Array([num]);
var indexPosition = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //background(0);

}

function draw() {
    var c = color('#C2BCB0');
    var c1 = color('#D4C6C4');
    //amarillo
    //var c2 = color('#EEB53C');
    //aqua-verde
    //var c2 = color('#AEFFD8');
    //mauve
	//var c2 = color('#B59DA4');
	var c2 = color('#AAE5EE');

    background(c);

    translate(width/3.25, 0);

    var ruidoXB2 = 0.00001;
    var ruido_x_horizontal2 = noise(millis() * ruidoXB2) * 200;

    angleMode(DEGREES);

    push();
    scale(0.7, 0.5);
    translate(ruido_x_horizontal2, -100);
    rotate(35.5);
    noStroke();
    fill(c1);
    teru(0.000001, -3800, 0.000001, 3800);
    pop();

    push();
    scale(0.5, 0.7);
    translate(ruido_x_horizontal2, height/2);
    noStroke();
    fill(255);
    teru(0.00001, -3800, 0.00001, 3800);
    pop();

    push();
    scale(0.7, 0.5);
    noStroke();
    fill(c2); // inclinado
    //fill(0);
    translate(ruido_x_horizontal2, height/2);
    rotate(35.5);
    teru(0.000001, -4800, 0.00001, 4800);
    pop();

    push();
    scale(0.5, 0.7);
    translate(ruido_x_horizontal2 + 55, height/2);
    noStroke();
    fill(c);
    //fill(0);
    teru(0.000086, -4800, 0.000086, 4800);
    pop();

    push();
    scale(0.7, 0.5);
    translate(ruido_x_horizontal2, 470);
    rotate(35.5);
    noStroke();
    fill(255);
    //fill(0);
    teru(0.000086, -4800, 0.000086, 4800);
    pop();

    //2

    push();
    scale(0.7, 0.5);
    noStroke();
    fill(c1); // inclinado
    //fill(0);
    translate(ruido_x_horizontal2 + 340, 500);
    rotate(35.5);
    teru(0.00001, -2000, 0.00001, 2000);
    pop();

    push();
    scale(0.5, 0.7);
    noStroke();
    fill(255);
    //fill(0);
    translate(ruido_x_horizontal2 + 140, height/2);
    teru1(0.00006, -1000, 0.00006, 2000);
    pop();

    push();
    scale(0.5, 0.7);
    translate(ruido_x_horizontal2 + 520, 580);
    noStroke();
    fill(c);
    //fill(0);
    teru1<(0.00001, -1800, 0.000086, 1600);
    pop();

    push();
    scale(0.7, 0.5);
    translate(ruido_x_horizontal2 + 440, 550);
    rotate(35.5);
    noStroke();
    fill(255);
    //fill(0);
    teru(0.000006, -1400, 0.000006, 1900);
    pop();

    // 3

    push();
    scale(0.7, 0.5);
    noStroke();
    fill(c1); // inclinado
    //fill(0);
    translate(ruido_x_horizontal2 + 440, 500);
    rotate(35.5);
    teru(0.000026, -1200, 0.000026, 1200);
    pop();

    push();

  scale(0.7, 0.5);
  noStroke();
  fill(c2); // inclinado
  //fill(0);
  translate(ruido_x_horizontal2 + 440, 800);
    rotate(35.5);
  teru(0.00001, -1800, 0.00001, 1800);

  pop();

push();
  scale(0.7, 0.5);
  noStroke();
  fill(c1); // inclinado
  //fill(0);
  translate(ruido_x_horizontal2 + 640, 1100);
    rotate(35.5);
  teru(0.0001, -3800, -0.0001, 3800);

  pop();

  push();

  scale(0.5, 0.7);
  noStroke();
  fill(255);
  //fill(0);
  translate(ruido_x_horizontal2 + 660, 600);
  teru1(0.0000008, -4200, 0.0000008, 4200);

  pop();


    push();
    scale(0.5, 0.7);
    translate(ruido_x_horizontal2 + 720, 580);
    noStroke();
    fill(c);
    //fill(0);
    //747474
    teru1(0.0001, -1800, 0.0001, 1200);
    pop();

    push();
    scale(0.7, 0.5);
    translate(ruido_x_horizontal2 + 640, 700);
    rotate(35.5);
    noStroke();
    fill(255);
    teru(0.00001, -1800, 0.00001, 1200);
    pop();


    //contador = contador + dato;
    //toyollo();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function teru(ruido, detalle, ruido2, detalle2) {
    var ruidoX = ruido;
    var ruido_x = noise(millis() * ruidoX) * detalle;

    var ruidoS = ruido2;
    var ruido_s = noise(millis() * ruidoS) * detalle2;

    // rect(0, 0, hola, ruido_x);

    beginShape();
    vertex(80, 0 + ruido_s);
    vertex(189, 150 + ruido_s);
    vertex(189, 0 + ruido_x);
    vertex(80, -150 + ruido_x);
    endShape();
}

function teru1(ruido, detalle, ruido2, detalle2) {
    var ruidoX = ruido;
    var ruido_x = noise(millis() * ruidoX) * detalle;

    var ruidoS = ruido2;
    var ruido_s = noise(millis() * ruidoS) * detalle2;

    // rect(0, 0, hola, ruido_x);

    beginShape();
    vertex(80, 0 + ruido_s);
    vertex(189, 100 + ruido_s);
    vertex(189, 0 + ruido_x);
    vertex(80, -100 + ruido_x);
    endShape();
}