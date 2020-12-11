 const Engine=Matter.Engine;//namespacing
 const World=Matter.World; 
 const Bodies=Matter.Bodies;

var engine, world, squareBall, ground;

function setup() {
   createCanvas(800,400);
   engine=Engine.create();
   world=engine.world;

   var options = {
    isStatic: true
  
    }
    var ballOptions = {
      isStatic: false,
      restitution: 1
    
      }

   squareBall = Bodies.rectangle(400,200,50,50, ballOptions)
   ground = Bodies.rectangle(400,380,800,20,options)


   World.add(world,squareBall)
   World.add(world,ground)
}

function draw() {

 
  background(0);  
  Engine.update(engine);

  rectMode(CENTER)
  rect(squareBall.position.x, squareBall.position.y,50,50)
  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,800,20)

  drawSprites();
}