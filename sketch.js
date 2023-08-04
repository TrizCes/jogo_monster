let personagem;
let grama;
let cake;
const tamanho = 64;
const velocidade = 64;

let andarX = 0;
let andarY = 0;

let botao;

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('src/img/monstro.png');
  grama = loadImage('src/img/grama.jpg');
  cake = loadImage('src/img/cake.png');
}

function draw() {
  background(220);

  if (andarX < 0) {
    andarX = 0;
  }
  if (andarY < 0) {
    andarY = 0;
  }
  if (andarX > tamanho * 8) {
    andarX = tamanho * 8;
  }
  if (andarY > tamanho * 8) {
    andarY = tamanho * 8;
  }

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(grama, x * tamanho, y * tamanho, tamanho, tamanho);
    }
  }

  image(cake, 8 * tamanho, 8 * tamanho, tamanho, tamanho);

  image(personagem, andarX, andarY, tamanho, tamanho);

  if (andarX === tamanho * 8 && andarY === tamanho * 8) {
    rect(160, 160, 256, 256);
    textSize(20);
    text('Monstro gostar bolo!', 200, 300);
    botao = createButton('Reiniciar');
    botao.mousePressed(reset);
    noLoop();
  }
}

function reset() {
  andarX = 0;
  andarY = 0;
  botao.remove();
  loop();
}

function keyPressed() {
  if (keyIsDown(DOWN_ARROW)) {
    andarY += velocidade;
  }
  if (keyIsDown(UP_ARROW)) {
    andarY -= velocidade;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    andarX += velocidade;
  }
  if (keyIsDown(LEFT_ARROW)) {
    andarX -= velocidade;
  }
}
