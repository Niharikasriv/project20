var car; 
var wall;
var speed, height;

function setup() {

  speed=random(55,90);
  height=random(1600,400);


  createCanvas(1600,400);

  car = createSprite(55,200,30,10);
 
  wall = createSprite(1500,200,60,height/2);

}

function draw() 

{
  background(255,255,255);
  
  car.VelocityX=speed;


if(wall.x-car.x < (car.width+wall.width)/2){

  car.velocity=0;
  deformation = 0.5*width*speed*speed/22509;
  if(deformation>180){

    car.shapecolor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){

    car.shapecolor = color(230,230,0);
  }

  if(deformation<100){

    car.shapecolor = color(0,255,0);
  }
}



  drawSprites();
}