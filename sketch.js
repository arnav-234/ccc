 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango2 = new mango1(400,90,1)
	mango3 = new mango1(200,300,1)
	mango4 = new mango1(300,300,1)
	mango5 = new mango1(200,300,1)
	mango6 = new mango1(200,300,1)
	boy2=new boy1(40,40,60,60)
	stone2=new stone1(30,40,20,20)
	tree2=new tree1(40,40,100,100)
	elastic1 = new elastic(stone2.body,{x:34,y:60})
  
}


function draw() {
 
  background(100);
  Engine.update(engine);

  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  boy2.display()
  tree2.display()
  stone2.display()
  elastic1.display()
}

function mousereleased()
{
	
}
