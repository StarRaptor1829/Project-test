var paper1, paperImage
var wall1,wall2,wall3;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paperImage=loadImage("images.jpg");
}

function setup() {
	var canvas= createCanvas(800, 700);
ground=createSprite(400,680,1000,20);
wall1=createSprite(600,640,200,20);
wall2=createSprite(500,600,20,100);
wall3=createSprite(700,600,20,100);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(25,700);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}