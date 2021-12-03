var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jellyfish,jelly_img
var plastic,plastic_img
var turtle,turtle_img
var begin,begin_image
var middle,middle_img
var coral,coral_img

var score

function preload(){

  
  jellyfish_img = loadImage("pics for game/jelly.png");
  
  plastic_img = loadImage("pics for game/plastic.png");
  
  
  coral_img= loadImage("pics for game/coral.png");

  middle_img= loadImage("pics for game/underwater-image.png");

  turtle_img= loadImage("pics for game/turtle.png");


  
}

function setup() {
  createCanvas(1500, 400);
  
  
  
  coral = createSprite(200,180,400,20);
  coral.addImage("corals",coral_img);
  coral.scale = 0.04;
    
  
  middle = createSprite(700,-140,10,10);// what is happening?!
  middle.addImage("underwater",middle_img);
  middle.scale=0.9
  middle.x = middle.width/2;
  middle.velocityX=-2

  
  turtle = createSprite(300,140,10,10);
  turtle.addImage("turtles",turtle_img);
  turtle.scale=0.6

  score=0 ;

}

function draw() {
  

  turtle.x=200
  turtle.y=mouseY

  spawnPlastics();
  spawnJellies();


 // if (jelliesGroup.isTouching(turtle)){
   // score=score+1
  //}

    
  

   // if(plastic.isTouching(turtle)){  
     // gameState = END;
     // background("grey")  
      //display dead turtle
   // }

  //  if (jellyfish.isTouching(turtle)) {
      //get 1 point
       //jellyfish group thing is not working black screen is coming
    //}
    
    drawSprites();

    textSize(30)
    text("Score: "+ score,1300,60);
  }
 
  
    //if we get 10 jelly fish background change to coral
    
    //I want a moving background how to do that
    

  
 
  



function spawnPlastics() {
  //write code here to spawn the plastics
  if (frameCount %  80=== 0) {
    plastic = createSprite(1550,100,10,10);
    plastic.addImage("plastics",plastic_img);
    plastic.y = Math.round(random(50,350));
    plastic.scale=0.1
    plastic.velocityX = -10;
    
     //assign lifetime to the variable
    plastic.lifetime = 800;
    
    //adjust the depth
    plastic.depth = turtle.depth+1;
    turtle.depth = turtle.depth;
     //add each plastic to the group
    // plasticsGroup.add(plastic);
    
  }
  
}


function spawnJellies() {
  //write code here to spawn the plastics
  if (frameCount %  100=== 0) {
    jellyfish = createSprite(1550,140,10,10);
    jellyfish.addImage("jellies",jellyfish_img);
    jellyfish.y = Math.round(random(50,350));
    jellyfish.scale=0.50
    jellyfish.velocityX = -8;
    
     //assign lifetime to the variable
     jellyfish.lifetime = 800;
    
    //adjust the depth
    jellyfish.depth = turtle.depth+1;
    turtle.depth = turtle.depth;
    
   //add each jelly to the group
  // jelliesGroup.add(jellyfish);
    
  }
  
}
    
    

function reset(){
  gameState = PLAY;
  ground.velocityX = -(6 + 3*score/100);
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  score = 0;
  
}
