
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle, ground;
var basket1, basket2, basket3;
function preload()
{
	
}

function setup() {
	createCanvas(1900, 950);
  

	engine = Engine.create();
	world = engine.world;

  circle = new Paper(200,900,20);
  ground = new Ground(1000, 940, 2000, 20, {isStatic:true});

  basket1 = new Basket(1100,885,20,100);
  basket2 = new Basket(1350, 885, 20, 100);
  basket3 = new Basket(1225, 925, 250, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  circle.display();
  ground.display();

  basket1.display();
  basket2.display();
  basket3.display();
  
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(circle.body, circle.body.position, {x: 85, y: -85})
  }
}
