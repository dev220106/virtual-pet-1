//Create variables here
var petmood;
var petimg;
var food
var database;
var item;
var score=20;

function preload()
{ 
   petimg=loadImage("images/dogImg.png");
   petmood=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  var foodleft=database.ref('Food');
  foodleft.on("value",readFood,showErr)
  dog=createSprite(200,200,50,50);
  dog.addImage(petimg);
  dog.scale = 0.2;

}


function draw() {  
 background(0,255,0);
 text("FOOD LEFT:"+score,400,350);
 textSize("20");
if (keyWentDown(UP_ARROW)){
 writeFood(item);
 score=score-1;
dog.addImage(petmood);
}
if (score<0){
   score=0;
}

  drawSprites();
  //add styles here

}
 function readFood(data){
    item=data.val()
 }
 
function showErr(){
   console.log("error in reading")
}
  
function writeFood(x){
   x=x-1;
   if(x<0){
      x=0;
   }   
   database.ref('/').update({
      Food:x
   })
}
