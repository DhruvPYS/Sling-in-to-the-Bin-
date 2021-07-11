
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper, left, down, right, ground0, engine, world


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	down = new Dustbin(600,555, 200, 200)
  
	//Create the Bodies Here.
paper = new Paper(70,580, 30)

//left = new Dustbin(540,600,30,130)
//right = new Dustbin(665,600,30,130)
ground0 = new Ground(400, 680)

chain = new Chain(paper.body, {x:200, y: 300})

	Engine.run(engine);
  
}


function draw() {
	


  rectMode(CENTER);
  background(400);
  paper.display();
//left.display();
//right.display();
ground0.display();
  chain.display();
  down.display()
  drawSprites();
 
}

//function keyPressed()
//{
//if(keyCode === UP_ARROW)
//{
//Matter.Body.applyForce(paper.body, paper.body.position, {x:120, y:-185})
//}
//}
 
function mouseDragged ()
{
   Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY})
}

function mouseReleased ()
{
	chain.release ()
}


