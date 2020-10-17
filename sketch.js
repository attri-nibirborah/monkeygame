
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var Survivalscore;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 monkey= createSprite (85,315,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale=0.1; 
  
 ground = createSprite(400,350,900,10);
 ground.velocityX=-4;
 ground.x=width/2; 
  
 FoodGroup= new Group();
 obstcleGroup= new Group();
  
 Survivalscore = 0; 
  
  
  
}


function draw() {

  background("black");
  
  if (ground.x>0);{
    ground.x = ground.width/2
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12
    }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  
  
  drawSprite();
  
  stroke("red")
  textSize(20)
  fill("red")
  
  text("survivalscore:"+ Survivalscore,500,500)
  

   if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }

stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

}


function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}






