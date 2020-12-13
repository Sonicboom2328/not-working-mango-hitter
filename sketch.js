
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

slingshot=new SlingShot();
ground=new Ground();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 slingshot.display();
 ground.display();

}
function keyPressed(){
    if(keyCode === 32 && stoneOBG.body.speed <1){
        stoneOBG.trajectory=[];
        Matter.Body.setPosition(stoneOBG.body,{x:200,y:50});
       slingshot.attach(stoneOBG.body);
    }
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stoneOBG.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}




