const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground;

var world;

var particles = [];
var plinkos = [];
var divisions = [];
var offset;

var randX, randY;

var divisionHeight = 300;

function setup() {
  createCanvas(400,800);

  rectMode(CENTER);
  
	engine = Engine.create();
  world = engine.world;
  
  ground = new Rect(240,795,560,10);
  
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Rect(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (i=0; i < 4; i++){
    if (i % 2 === 0){
      offset = 20;
    }
    
    else{
      offset = 0;
    }
    
    for(var j = 0; j < 9; j++ ){
      plinkos.push(new White(j*50 + 10+ offset, (i+1)*100, 20));
    }
  }
  
  Engine.run(engine)
}

function draw() {
  background(0); 

  randX = random(50,350);
  randY = random(0, 40);

  if(frameCount % 60 === 0){
    particles.push(new Color(randX, randY, 20));
  }
  
  ground.display();
  
  for(var x = 0; x<6; x=x+1){
    divisions[x].display();
  }

  for(var x = 0; x<plinkos.length; x=x+1){
    plinkos[x].display();
  }

  for(var c = 0; c<particles.length; c=c+1){
    particles[c].display();
  }

  drawSprites();
}