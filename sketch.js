var paperBall, ground, string;
var bin_1, bin_2, bin_3;

var world, engine;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	var canvas = createCanvas(1000, 400);

	fill(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	//Makes the bin
	bin_1 = new Box(600, 270, 40, 210);
	bin_2 = new Box(800, 270, 40, 210);
	bin_3 = new Base(700, 360, 200, 20);

	//makes the ball
	paperBall = new Paper(100, 200, 30);

	//makes the ground
	ground = new Box(500, 380, 1020, 50);

	//makes the string
	string = new chain(paperBall.body, {x: 100, y: 180});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background(220);

	//displays the objects
 	ground.display();
  	bin_3.display();
	paperBall.display();
	string.display();
}

//moves the paper ball
function mouseDragged() {
	Body.setPosition(paperBall.body, {x: mouseX, y: mouseY});
}

//launches the ball
function mouseReleased() {
	string.fly();
}