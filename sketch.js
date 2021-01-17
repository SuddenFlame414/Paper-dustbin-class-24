
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground, dustbin;
var edge1, edge2, edge3;

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	edge1=createSprite(570,590, 20, 150);
	edge1.shapeColor=color("white");
	edge2=createSprite(680,650, 200, 20);
	edge2.shapeColor=color("white");
	edge3=createSprite(780,590, 20, 150);
	edge3.shapeColor=color("white");

	//Create the Bodies Here.
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color("yellow");

	paperObject = new Paper(100,660);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(paperObject);
  paperObject.display();
 drawSprites();
}



