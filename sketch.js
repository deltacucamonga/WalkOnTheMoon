var astronaut, astrounautIdie
var ground2, groundImg
var ground, groundImg
var ground3, groundImg
var plataform1
var run
var GameState = 0;
function preload() {
  groundimg = loadImage("src/platform.png")
  astrounautIdie = loadAnimation("src/tile000.png", "src/tile001.png", "src/tile002.png", "src/tile003.png", "src/tile004.png")
  run = loadAnimation("src/spriteRun000.png", "src/spriteRun001.png", "src/spriteRun002.png", "src/spriteRun003.png", "src/spriteRun004.png")
  plataform1 = loadImage("src/platformSmallTall.png")
}
function setup() {
  canvas = createCanvas(1600, 800);
  //TODO 1: centralizar canvas
  canvas.position(80, 100, 'fixed');
  // canvas.center();
  astronaut = createSprite(400, 200, 50, 50)
  astronaut.addAnimation("tile", astrounautIdie)
  astronaut.addAnimation("run", run)
  astronaut.scale = 0.5
  ground = createSprite(635, 790, 1600, 40)
  ground.addImage(groundimg)


  ground2 = createSprite(1400, 790, 1600, 40)
  ground2.addImage(groundimg)

  ground3 = createSprite(3000, 790, 1600, 40)
  ground3.addImage(groundimg)

  plataform = createSprite(2222, 700, 1600, 40)
  plataform.addImage(plataform1)

}



function draw() {
  background("lightblue");
  camera.position.x = astronaut.x
  astronaut.velocityY = astronaut.velocityY + 5
  if (keyDown("right")) {
    GameState = 1;
  }
  if (GameState == 1) {
    if (keyDown("right")) {
      astronaut.changeAnimation("run", run)
      astronaut.x = astronaut.x + 10
    }
    if (astronaut.collide(ground)) {
      astronaut_jump()
    }
   else if (astronaut.collide(ground2)) {
      astronaut_jump()
    }
    else if (astronaut.collide(ground3)) {
      astronaut_jump()
    }
  }
  astronaut.collide(ground2)
  astronaut.collide(ground)
  astronaut.collide(ground3)
  astronaut.collide(plataform)


  drawSprites();

}

function astronaut_jump(params) {
  if (mouseDown("leftButton")) {
    astronaut.velocityY = astronaut.velocityY - 60
    astronaut.velocityX = astronaut.velocityX + 5
  }
}
