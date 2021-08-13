var Bg, Dock,Iss;
var ISS , DOCK; 
function preload(){
  Bg  = loadImage("Space-Background-Images.jpg");
  Dock = loadImage("Dock.png");
  Iss = loadImage("ISS.png");

}
function setup() {

  createCanvas(1000,700);
  ISS = createSprite(200, 300, 50, 50);
  ISS.addImage(Iss);
  DOCK = createSprite(900,300,50,50);
  DOCK.addImage(Dock);
ISS.debug = true;
ISS.setCollider("rectangle",95,-65,10,10);
  DOCK.debug = true;

}

function draw() {
  background(Bg);  
  if(keyDown(UP_ARROW)){
    DOCK.velocityY = -0.2;
  }
  if(keyDown(DOWN_ARROW)){
    DOCK.velocityY = 0.2;
  }
  if(keyDown(RIGHT_ARROW)){
    DOCK.velocityX = 0.5;
  }
  if(keyDown(LEFT_ARROW)){
    DOCK.velocityX = -0.5;
  }
  if(keyDown("SPACE")){
    DOCK.velocityX = 0;
    DOCK.velocityY = 0;
  }
  if(DOCK.x === 365 && DOCK.y === 220){
   DOCK.velocityX = 0;
   DOCK.velocityY = 0;
   text("Mission Completed",500,500)
}
if(DOCK.isTouching(ISS)){
  DOCK.velocityX = 0;
  DOCK.velocityY = 0;
  text("Mission Completed",500,500)
  text.size = 40
}
  console.log(DOCK.x);
console.log(DOCK.y);
  drawSprites();
}

