var survivalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400)
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.x=ground.width/2
  ground.velocityX=-4
  console.log(ground.x)
  
  score=0;
}


function draw() {
 background("white")
  createEdgeSprites();
  
  ground.velocityX = -(4 + 3* score/100)
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  
  
  food();
  obstacles();
  
  if(keyDown("space")&& monkey.y >= 100) 
  {
  monkey.velocityY = -12;
  }
   
  monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);

  if(ground.x<0){
   ground.x=ground.width/2
  }
  
  
  drawSprites();
}

function food () {
 
  if (World.frameCount%80===0) {
      
    banana=createSprite (400,100,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    banana.scale=0.1;
    banana.lifetime = 400;
    FoodGroup.add(banana)
   }
}

function obstacles(){
  if (World.frameCount%300===0) {
    obstacle=createSprite (400,308,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    obstacle.scale=0.2;
    obstacle.lifetime =400;
    obstacleGroup.add(obstacle) 
  }
}
