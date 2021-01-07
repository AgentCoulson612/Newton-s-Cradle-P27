
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let ball1, bar;
let link;
let wasPressed = false;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new Ball(520,300,20);
    ball2 = new Ball(480,300,20);
    ball3 = new Ball(440,300,20);
    ball4 = new Ball(400,300,20);
    ball5 = new Ball(360,300,20);
    ball6 = new Ball(320,300,20);
    ball7 = new Ball(280,300,20);
    bar = new Bar(400, 100, 400, 20);
    link1 = new Link(bar.body, ball1.body, 120);
    link2 = new Link(bar.body, ball2.body, 80);
    link3 = new Link(bar.body, ball3.body, 40);
    link4 = new Link(bar.body, ball4.body, 0);
    link5 = new Link(bar.body, ball5.body, -40);
    link6 = new Link(bar.body, ball6.body, -80);
    link7 = new Link(bar.body, ball7.body, -120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  link1.display();
  link2.display();
  link3.display();
  link4.display();
  link5.display();
  link6.display();
  link7.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display()
  ball6.display();
  ball7.display();
  bar.display();
  drawSprites();

//   console.log(link.constraint.pointA)
//   console.log(link.constraint.pointB)
//   console.log('\n')

  if (keyDown('E') && !wasPressed) {
      Matter.Body.applyForce(ball1.body, ball1.body.position, {x : 70, y : 0});
      enableE();
  }
 
}

setInterval(function() { console.log(ball1.body.position) }, 1000);

function enableE() { 
    wasPressed = true;
    setTimeout(function() {
        wasPressed = false;
    }, 1000)
}



