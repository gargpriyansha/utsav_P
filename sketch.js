const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var player,playerIMG;
var groundLvel1,groundLvel_img;


var ground,engine,box1,world;

function preload() {
  groundLvel_img=loadImage("assets/Grass_copy.png");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create ();
  world = engine.world;

  var ground_options={
    isStatic :true
  }

  ground = Bodies.rectangle(200,290,400,10,ground_options);

  World.add(world,ground);

}

function draw() {
  background(0);
  
  Engine.update(engine);
  rectMode(CENTER);
  
  image(groundLvel_img,ground.position.x, ground.position.y , 400,10);

}