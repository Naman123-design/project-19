var mario, marioImg;
var background1, backgroundImg;
var bricks, bricksImg, bricksGroup;
var invbrick;

var score = 0;
function preload(){

backgroundImg=loadImage("deset1.jpeg");

marioImg = loadImage("mario.png");

bricksImg = loadImage("coin.png")

}

function setup(){

  createCanvas(500,333);

  background1 = createSprite(width/2,height/2);
  background1.addImage(backgroundImg);

  mario = createSprite(50,280,50,50);
  mario.addImage(marioImg);
  mario.scale=0.5;

bricksGroup = createGroup();

  invbrick = createSprite(250,310,500,5);
  
}

function draw(){

	background1.velocityX = -8; 
	mario.debug = true;
	mario.setCollider("circle",5,5,40);
	mario.collide(invbrick);
	
	if(bricksGroup.isTouching(mario)){
score = score + 5;
bricksGroup.destroyEach();
	}

	//bricksGroup.collid
	invbrick.visible = false

    if (background1.x < 0){
      background1.x = background1.width/2;
	}

	if(keyDown("space")){
     mario.velocityY = -10;
	}
	mario.velocityY = mario.velocityY+1;
 
	brick();

drawSprites();

textSize(30);
text ("score : "+score , 250,100)

}

function brick() {

	if(frameCount % 70 === 0){
	var bricks = createSprite(500,Math.round(random(100, 200)), 10, 10);
	bricks.addImage(bricksImg);
	bricks.velocityX = -5;
	bricks.lifetime = 100;
	bricks.scale = 0.3;
	bricksGroup.add(bricks);
	bricks.setCollider("circle",0,0,40);
  bricks.debug = true
	}
  }