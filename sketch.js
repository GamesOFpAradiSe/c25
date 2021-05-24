
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,obj,omg,co;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  obj = Bodies.rectangle(200,200,20,20)
  World.add(world,obj)
  omg = Bodies.rectangle(1000,200,20,20)
  World.add(world,omg)

  co = Bodies.circle(1000,200,20)
  World.add(world,co)


}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
    rect(obj.position.x,obj.position.y,50,50);

    rectMode(CENTER);
    rect(omg.position.x,omg.position.y,50,50);

   
    circle(co.position.x,co.position.y,50);

  
}
