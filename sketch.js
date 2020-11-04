const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(250,784,800,30)
  
  for (var c = 0;c<=width;c=c+80){
    divisions.push(new Divisions(c, 620, 10, divisionHeight));
  }

  for(var r = 40; r <=width; r=r+50){
    plinkos.push(new Plinko(r,75,12));
  }

  for(var r = 15; r <=width-10; r=r+50){
    plinkos.push(new Plinko(r,175,12));
  }

  for(var r = 40; r <=width-10; r=r+50){
    plinkos.push(new Plinko(r,275,12));
  }

  for(var r = 15; r <=width-10; r=r+50){
    plinkos.push(new Plinko(r,375,12));
  }

}

function draw() {
  background(14, 8, 38); 
  Engine.update(engine);

  ground1.display();

  for (var c = 0; c < divisions.length; c++){
    divisions[c].display();
  }
   
  for (var r = 0; r < plinkos.length; r++){
    plinkos[r].display();
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 12));
  }

  for (var r = 0; r < particles.length; r++){
    particles[r].display();
  }

  drawSprites();
}