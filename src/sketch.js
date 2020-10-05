import P5 from 'p5/lib/p5.min.js'

const containerElement = document.getElementById('p5-container')

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    var c = p.color('#C2BCB0')
    var c1 = p.color('#D4C6C4')
    // amarillo
    // var c2 = p.color('#EEB53C');
    // aqua-verde
    // var c2 = p.color('#AEFFD8');
    // mauve
    // var c2 = p.color('#B59DA4');
    var c2 = p.color('#AAE5EE')

    p.background(c)

    p.translate(p.width / 3.25, 0)

    var ruidoXB2 = 0.00001
    var ruido_x_horizontal2 = p.noise(p.millis() * ruidoXB2) * 200

    p.angleMode(p.DEGREES)

    p.push()
    p.scale(0.7, 0.5)
    p.translate(ruido_x_horizontal2, -100)
    p.rotate(35.5)
    p.noStroke()
    p.fill(c1)
    teru(p, 0.000001, -3800, 0.000001, 3800)
    p.pop()

    p.push()
    p.scale(0.5, 0.7)
    p.translate(ruido_x_horizontal2, p.height / 2)
    p.noStroke()
    p.fill(255)
    teru(p, 0.00001, -3800, 0.00001, 3800)
    p.pop()

    p.push()
    p.scale(0.7, 0.5)
    p.noStroke()
    p.fill(c2) // inclinado
    // p.fill(0);
    p.translate(ruido_x_horizontal2, p.height / 2)
    p.rotate(35.5)
    teru(p, 0.000001, -4800, 0.00001, 4800)
    p.pop()

    p.push()
    p.scale(0.5, 0.7)
    p.translate(ruido_x_horizontal2 + 55, p.height / 2)
    p.noStroke()
    p.fill(c)
    // p.fill(0);
    teru(p, 0.000086, -4800, 0.000086, 4800)
    p.pop()

    p.push()
    p.scale(0.7, 0.5)
    p.translate(ruido_x_horizontal2, 470)
    p.rotate(35.5)
    p.noStroke()
    p.fill(255)
    // p.fill(0);
    teru(p, 0.000086, -4800, 0.000086, 4800)
    p.pop()

    // 2

    p.push()
    p.scale(0.7, 0.5)
    p.noStroke()
    p.fill(c1) // inclinado
    // fill(0);
    p.translate(ruido_x_horizontal2 + 340, 500)
    p.rotate(35.5)
    teru(p, 0.00001, -2000, 0.00001, 2000)
    p.pop()

    p.push()
    p.scale(0.5, 0.7)
    p.noStroke()
    p.fill(255)
    // fill(0);
    p.translate(ruido_x_horizontal2 + 140, p.height / 2)
    teru1(p, 0.00006, -1000, 0.00006, 2000)
    p.pop()

    p.push()
    p.scale(0.5, 0.7)
    p.translate(ruido_x_horizontal2 + 520, 580)
    p.noStroke()
    p.fill(c)
    // fill(0);
    // teru1 < (p, 0.00001, -1800, 0.000086, 1600)
    p.pop()

    p.push()
    p.scale(0.7, 0.5)
    p.translate(ruido_x_horizontal2 + 440, 550)
    p.rotate(35.5)
    p.noStroke()
    p.fill(255)
    // fill(0);
    teru(p, 0.000006, -1400, 0.000006, 1900)
    p.pop()

    // 3

    p.push()
    p.scale(0.7, 0.5)
    p.noStroke()
    p.fill(c1) // inclinado
    // fill(0);
    p.translate(ruido_x_horizontal2 + 440, 500)
    p.rotate(35.5)
    teru(p, 0.000026, -1200, 0.000026, 1200)
    p.pop()

    p.push()

    p.scale(0.7, 0.5)
    p.noStroke()
    p.fill(c2) // inclinado
    // fill(0);
    p.translate(ruido_x_horizontal2 + 440, 800)
    p.rotate(35.5)
    teru(p, 0.00001, -1800, 0.00001, 1800)

    p.pop()

    p.push()
    p.scale(0.7, 0.5)
    p.noStroke()
    p.fill(c1) // inclinado
    // fill(0);
    p.translate(ruido_x_horizontal2 + 640, 1100)
    p.rotate(35.5)
    teru(p, 0.0001, -3800, -0.0001, 3800)

    p.pop()

    p.push()

    p.scale(0.5, 0.7)
    p.noStroke()
    p.fill(255)
    // fill(0);
    p.translate(ruido_x_horizontal2 + 660, 600)
    teru1(p, 0.0000008, -4200, 0.0000008, 4200)

    p.pop()

    p.push()
    p.scale(0.5, 0.7)
    p.translate(ruido_x_horizontal2 + 720, 580)
    p.noStroke()
    p.fill(c)
    // fill(0);
    // 747474
    teru1(p, 0.0001, -1800, 0.0001, 1200)
    p.pop()

    p.push()
    p.scale(0.7, 0.5)
    p.translate(ruido_x_horizontal2 + 640, 700)
    p.rotate(35.5)
    p.noStroke()
    p.fill(255)
    teru(p, 0.00001, -1800, 0.00001, 1200)
    p.pop()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}

function teru (p, ruido, detalle, ruido2, detalle2) {
  var ruidoX = ruido
  var ruido_x = p.noise(p.millis() * ruidoX) * detalle

  var ruidoS = ruido2
  var ruido_s = p.noise(p.millis() * ruidoS) * detalle2

  // rect(0, 0, hola, ruido_x);
  p.beginShape()
  p.vertex(80, 0 + ruido_s)
  p.vertex(189, 150 + ruido_s)
  p.vertex(189, 0 + ruido_x)
  p.vertex(80, -150 + ruido_x)
  p.endShape()
}

function teru1 (p, ruido, detalle, ruido2, detalle2) {
  var ruidoX = ruido
  var ruido_x = p.noise(p.millis() * ruidoX) * detalle

  var ruidoS = ruido2
  var ruido_s = p.noise(p.millis() * ruidoS) * detalle2

  // rect(0, 0, hola, ruido_x);
  p.beginShape()
  p.vertex(80, 0 + ruido_s)
  p.vertex(189, 100 + ruido_s)
  p.vertex(189, 0 + ruido_x)
  p.vertex(80, -100 + ruido_x)
  p.endShape()
}

const p5 = new P5(sketch, containerElement)

export default p5
