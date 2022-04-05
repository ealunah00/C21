const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;

//  VARIABLES PARA PAREDES



//  VARIABLES PARA BOTONES



function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  
  //  CREAR PAREDES MEDIANTE new Ground



  // CREAR BOTONES PARA FUERZA A LA DERECHA (hForce) Y ARRIBA (hForce)
  
  

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  ellipse(ball.position.x, ball.position.y, 20);

  // MOSTRAR PAREDES



  // ACTUALIZAR MOTOR
  
}

//  PROGRAMAR FUNCIONES hForce Y vForce
function hForce() {
  
}

function vForce() {
  
}
