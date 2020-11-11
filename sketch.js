var bananaImage,banana,obstacleImage,obstacleGroup,
background2,score,player,ground;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var blah = 0;
function preload(){
bananaImage = loadImage("banana.png")
  
background2 = loadImage("jungle.jpg")
  
obstacleImage = loadImage("stone.png") 
  
player = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
}

function setup() {
  createCanvas(400, 400);
  background23 = createSprite(200,200,10,10);
  background23.addImage("ytu",background2);
  background23.velocityX = -2;
  
  player1 = createSprite(100,300,20,20)
  player1.addAnimation("due",player)
  player1.scale = 0.1 ;
  
 obstacleGroup = new Group();
 foodGroup = new Group();
  
  ground = createSprite(200,400,400,5);
  ground.visible = false;
  
}

function draw() {
  if (gameState === PLAY){
  if (background23.x <= 0){
  background23.x = 200;
  }
    //console.log(player1.y);
     if (foodGroup.isTouching(player1)){
    score = score + 2;
    foodGroup.destroyEach();
       
  }
  switch(score){
    case 10 : player1.scale = 0.2;
      break;
    case 20 : player1.scale = 0.3;
      break;
      case 30 : player1.scale = 0.4;
      break;
      case 40 : player1.scale = 0.5;         
      break;
  }
      if (player1.isTouching(obstacleGroup)){
  player1.scale = 0.1;
    blah = blah + 1;
    obstacleGroup.destroyEach();
  }
    if (player1.isTouching(obstacleGroup) && blah === 2){
      gameState = END;
    }
     food();
  stone();
    console.log(blah)
   if (keyDown("space") && player1.y >= 280){
    player1.velocityY =-14;
  }
  player1.velocityY = player1.velocityY + 0.5;     
  player1.collide(ground);
      
  }
  
 if (gameState === END){
  player1.velocityX = 0;
  background23.velocityX = 0;
  fill("blue")
  text("GAME OVER",200,100);  
}
  drawSprites();
   text("Score :" + score,300,100);
//     background("blue");
}
 function food(){
   if (frameCount % 150 === 0){
    banana = createSprite(400,120,20,20);
  banana.addImage("duy",bananaImage)
  
  banana.velocityX = -2;
  banana.scale = 0.1;
     foodGroup.add(banana)
   }
   }
  function stone(){
    if (frameCount % 250 === 0){
      stone1 = createSprite(400,360,20,20);
      stone1.addImage("dyf",obstacleImage)
      stone1.velocityX = -2;
      stone1.scale = 0.1;
      obstacleGroup.add(stone1);
    }
  } 