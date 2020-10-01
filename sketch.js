var car ,wall
var speed , weight ,thick

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  thick=random(22,83);

  car=createSprite(50,200,50,30)
  car.velocityX=(speed);
  car.shapeColor=color=80,80,80;

  wall=createSprite(1500,200,thick,height/2);
  wall.shapeColor=color=80,80,80;;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x<=(car.width/2+wall.width/2)){
 car.velocityX=0;
 car.shapeColor="red";
wall.shapeColor="red";
  }
  
}
  
  