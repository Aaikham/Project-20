var wall ,car;
var speed, weight;




function setup() {
  createCanvas(800,400);
  speed=random(50,100);
  weight=random(400,1500);
  car=createSprite(40, 200, 30, 30);
  car.velocityX=speed;
  
  wall=createSprite(700,200,20,200);
}

function draw() {
  background(255,255,255);  
  
    
istouching()



  
  drawSprites();
}
function istouching(){

  if(wall.x -car.x<(car.width+wall.width/2)){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){


      car.shapeColor="red";
    }
    if(deformation<100){

      car.shapeColor="green"
    }
    if(deformation>100 &&  deformation<180){

car.shapeColor="yellow"

    }
    }
  }