var fixedRect, movingRect;

var Dum ,Vanshikha;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Dum = createSprite (100 ,100 ,50 ,50);
  Dum.shapeColor - "purple"
  Vanshikha = createSprite(200 ,100 ,50 ,50)
  Vanshikha.shapeColor = "brown"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,Vanshikha)){
    movingRect.shapeColor = "pink";
    Vanshikha.shapeColor = "pink";
  } else {
    movingRect.shapeColor = "red";
    Vanshikha.shapeColor = "red";
  }



  drawSprites();
}

