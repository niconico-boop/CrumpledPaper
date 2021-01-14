
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;
var ground;
var dustbin1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 680, 800, 30)
	paper1 = new Paper(20, 670, 50, 50)
	dustbin1 = new Dustbin(400, 650)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper1.display();
  dustbin1.display();
// I was having some problems with loading the paper image :/
}







