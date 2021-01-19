const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var Canvas;
var ground;

function setup ()
{
   Canvas = createCanvas (windowWidth/1 , windowHeight/1);
   engine = Engine.create ();
   world = engine.world;

    let canvasmouse = Mouse.create (canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
                     mouse : canvasmouse
                  } 
     mConstraint = MouseConstraint.create(engine,options);
     World.add (world,mConstraint);

   ground = new Base (windowWidth/2,windowHeight - 600,windowWidth/1,20);
   var groundX = ground.body.position.x; 
   var bobDiameter = 120;

   bob1 = new Pendulum (groundX,200,50);
   rope1 = new Sling (bob1.body,ground.body,0,0); 

   bob2 = new Pendulum (groundX + (-bobDiameter),200,50); 
   rope2 = new Sling (bob2.body,ground.body,-bobDiameter,0);

   bob3 = new Pendulum (groundX + bobDiameter,200,50);
   rope3 = new Sling (bob3.body,ground.body,bobDiameter,0);
   
   bob4 = new Pendulum (groundX + (-2*bobDiameter),200,50);
   rope4 = new Sling (bob4.body,ground.body,-bobDiameter*2,0);
   
   bob5 = new Pendulum (groundX + 2*bobDiameter,200,50);
	 rope5 = new Sling (bob5.body,ground.body,bobDiameter*2,0);

	Engine.run(engine);
} 

function draw ()
{
  rectMode(CENTER);
  background("grey");
  ground.display ();

   bob1.display ();
   rope1.display ();

   bob2.display ();
   rope2.display ();

   bob3.display ();
   rope3.display ();

   bob4.display ();
   rope4.display ();

   bob5.display ();
   rope5.display ();

  drawSprites(); 
}  

// function mouseDragged ()
// {
//   Matter.Body.setPosition(bob5.body, {x: mouseX, y: mouseY})
// }
