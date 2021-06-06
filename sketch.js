var bg1i,bg1,bg2i,bg2;
var launcherImg,launcher,rocketImg,rocket,score = 0;
var odGroup, od, od1, od2, od3, od4, od5;
var clouds;
var wall1,wall2;
var gameState = 1;
var play =1;
var end = 0;
var v = 1;
var c = "press up arrow to start";
 function preload(){
  bg1i = loadImage("bg.jpg");
  bg2i = loadImage("spacebg.jpg");
  od1 = loadImage("ob1.png");
  od2 = loadImage("ob2.png");
  od3 = loadImage("ob3.png");
  od4 = loadImage("ob4.png");
  od5 = loadImage("ob5.png");
  clouds = loadImage("cloud.gif");
  launcherImg = loadImage("spaceStuttel.png");
  rocketImg = loadImage("rocket.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  odGroup = new Group()

  bg1 = createSprite(300,300,600,600);
  bg1.addImage(bg1i)
  bg1.scale = 1
 
  wall1 = createSprite(0,400,10,900);

  wall2 = createSprite(1700,400,10,900);


  bg2 = createSprite(300,1,600,600);
  bg2.addImage(bg2i)
  bg2.scale = 1
  bg2.visible = false;
  
  launcher = createSprite(300,240,600,600);
  launcher.addImage(launcherImg)
  launcher.scale = 0.7
  
  rocket = createSprite(800,400,20,20);
  rocket.addImage(rocketImg)
  rocket.scale = 1
  rocket.visible = false;


}

function draw() {
  background(0);

  if (gameState === 1){

  if(keyIsDown(RIGHT_ARROW)){
    rocket.velocityX = 10;
  }
  if(keyIsDown(LEFT_ARROW)){
    rocket.velocityX = -10;
  }
  if(keyIsDown(UP_ARROW)){
    score = score + 1
    v = 0
    if ( frameCount % 50 ===0){
      od = createSprite(random(0,2000),0,100,100);
      od.scale = 0.3
      od.velocityY = 3;
//      od.lifetime = 65;
      var ran = Math.round(random(1,5))
      switch(ran){
        case 1: od.addImage("ob11",od1);
        break
        case 2: od.addImage("ob11",od2);
        break
        case 3: od.addImage("ob11",od3);
        break
        case 4: od.addImage("ob11",od4);
        break
        case 5: od.addImage("ob11",od5);
        break
    }
    odGroup.add(od);
  }

  }
  if(score < 10000 && score > 0){
  background(clouds);
  score = score + 5
  odGroup.velocityX = 5;
  rocket.visible = true;
  rocket.addImage(rocketImg)  
  bg1.visible = false;
  launcher.visible = false;
  }

  if(score < 30000 && score > 10000){
  background(clouds);
  score = score + 6
  odGroup.velocityX = 6;
  rocket.visible = true;
  rocket.addImage(rocketImg)  
  bg1.visible = false;
  launcher.visible = false;
  }

  if(score < 50000 && score > 30000){
    background(clouds);
    score = score + 7
    odGroup.velocityX = 7;
    rocket.visible = true;
    rocket.addImage(rocketImg)  
    rocket.scale = 0.5
    bg1.visible = false;
    launcher.visible = false;
    }

  if(score < 70000 && score > 50000){
    background(clouds);
    odGroup.velocityX = 8; 
    score = score + 8
    rocket.visible = true;
    rocket.addImage(rocketImg)  
    rocket.scale = 0.5
    bg1.visible = false;
    launcher.visible = false;
    }

  if(score < 90000 && score > 70000){
    background(clouds);
    odGroup.velocityX = 9; 
    score = score + 9
    rocket.visible = true;
    rocket.addImage(rocketImg)  
    bg1.visible = false;
    launcher.visible = false;
    }

    if (odGroup.isTouching(rocket))
    {
    gameState = 0
    }

  fill(255,255,255)
  textSize(33)
  text(score,200,200)
  drawSprites();
  if (v === 1){
  text(c,800,400)
  }
  if(score > 90000){
  background(clouds);
  text("You Won",200,300)
  rocket.visible = true;
  rocket.addImage(rocketImg)  
  bg1.visible = false;
  launcher.visible = false;
  rocket.bounceOff(wall1)
  rocket.bounceOff(wall2)
  }
}
  if (gameState === 0){
  fill(255)
  textSize(33)
  text("You lost "+"your score was :"+score,200,200);
  text("Press down arrow to restart",200,300)
  if (keyDown(DOWN_ARROW)){
    rocket.x = 800;
    rocket.y = 400;
    score = 0
    gameState = 1;
  }
  }
}