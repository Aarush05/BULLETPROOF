/*var fixedrect,movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";

  gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="green";


gameobject2=createSprite(200,100,50,50);
gameobject2.shapeColor="green";


gameobject3=createSprite(300,100,50,50);
gameobject3.shapeColor="green";


gameobject4=createSprite(400,100,50,50);
gameobject4.shapeColor="green";
}

function draw() {
  background(0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(isTouching()){
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green"; 
  }
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x -object2.x <object2.width/2 +object1.width/2&&
    object2.x -object1.x <object2.width/2 +object1.width/2&&
   object1.y -object2.y <object2.height/2 +object1.height/2&&
    object2.y -object1.y <object2.height/2 +object1.height/2
    ){
    return true;
  }
  else{
  return false;
  }
}*/

var movingRect1, movingRect,movingRect2, movingRect3;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  
  movingRect1 = createSprite(800, 50,80,30);
  movingRect1.shapeColor = "green";

  movingRect2 = createSprite(800, 150,80,30);
  movingRect2.shapeColor = "green";

  movingRect3 = createSprite(800, 250,80,30);
  movingRect3.shapeColor = "green";

  movingRect = createSprite(800, 350,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 50, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(100, 150, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(100, 250, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(100, 350, 50, 50);
  gameObject4.shapeColor = "green";

  
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  movingRect1.x = World.mouseX;
  movingRect1.y = World.mouseY;
  
  movingRect2.x = World.mouseX;
  movingRect2.y = World.mouseY;

  movingRect3.x = World.mouseX;
  movingRect3.y = World.mouseY;

  text("IF THE WALL IS BLUE IT IS BULLETPROOF",500,500);

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }


  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}