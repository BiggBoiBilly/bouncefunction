var fixedRect, movingRect;
var fixed2, fixed3, fixed4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;

  movingRect = createSprite(400,200, 50, 80);
  movingRect.shapeColor = "blue";
  
  //movingRect.debug = true;
  
  fixed2 = createSprite(600,400, 50, 80);
  fixed2.shapeColor = "green";
 // fixed2.debug = true;

  fixed3 = createSprite(800,400, 50, 80);
  fixed3.shapeColor = "green";
 // fixed3.debug = true;

  fixed4 = createSprite(1000,400, 50, 80);
  fixed4.shapeColor = "red";
 // fixed4.debug = true;
  
 movingRect.velocityY = -5;
 movingRect.velocityY = +5;

  

}

function draw() {
  background(0,0,0);  




if (istouching(movingRect , fixedRect)){

  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);


}

else {

fixed3.shapeColor = "white";
}


  drawSprites();
}





