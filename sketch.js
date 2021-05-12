var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 playerAnimation=loadAnimation("images/Player-03.png")
 carAnimation1=loadAnimation("images/car1.png")
 carAnimation2=loadAnimation("images/car2.png")
logAnimation1=loadAnimation("images/log1.png")
cityAnimation=loadAnimation("images/city1.png","images/city2.png")

}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //grasses where player rest
  for(var i=0 ;i<6;i++)
 {
   var bottomGrass1= createSprite(683,height-50-(i*400),width,grassHeight)
   if (i%2===0)//adding road
   {
     var road=createSprite(683,height-150-(i*400)-grassHeight,width,300,)
     road.shapeColor="black";
    }
    bottomGrass1.shapeColor="green";
 }
 //to create cars 
 for(var i=0;i<40;i++){
   cars = new Car(2)
   carGroup1.add(cars.spt);
 }  

 //create logs
 for(var i=0;i<40;i++){
  log= new Log(-2)
  logGroup1.add(log.spt);
}  

//player
player=new Player(width/2,height-75);

//creating city
city=createSprite(width/2,-1500)
city.addAnimation("images",cityAnimation)
}


function draw() {
  background("skyblue");
 //MOVE SCREEN TO LOCATION OF PLAYER
 translate (0,-player.spt.y+height-150);

 //making the car re-appear
 for(i=1;i<carGroup1.length;i++){
   if(carGroup1[i].x>width){
     carGroup1[i].x=0;
   }
   if(carGroup1[i].x<0){
     carGroup1[i].x=width;
   }
 }
//game state end 
if(city.isTouching(player.spt)){
  gameSate="Win"
}
 //making log re-appear
 for(i=1;i<logGroup1.length;i++){
 if(logGroup1[i].x<0){
    logGroup1[i].x=width;
  }
}
if(gameSate===Win)
{
  stroke("Green")
  fill("Green")
textSize(40)
text("congratulations you made it",width/2-250,-1700)
carGroup1.destroyEach()
logGroup1.destroyEach()
}
  drawSprites();
}
function keyPressed(){

  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }
  
  else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }
  
 else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
   
 else if(keyCode == LEFT_ARROW){
  player.move(-2,0);
}

}
