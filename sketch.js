const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(1400,600);
 
  var box1,box2, box3,box4,box5,box6,box7, box8,box9,box10,box11,box12, box13,box14,box15, 
      box16,box17,box18,box19,box20,box21,box22,box23,box24,rect;
  var image;
}

function draw() {
  //first pyramid
  //bottom first part
 
  box1= createSprite(400,464,30,46);
  box1.shapeColor = color("blue");
  box2= createSprite(431,464,30,46);
  box2.shapeColor = color("blue");
  box3= createSprite(462,464,30,46);
  box3.shapeColor = color("blue");
  box4= createSprite(493,464,30,46)
  box4.shapeColor = color("blue");
  box5= createSprite(524,464,30,46);
  box5.shapeColor = color("blue");
  box6= createSprite(555,464,30,46);
  box6.shapeColor = color("blue");
  box7= createSprite(586,464,30,46);
  box7.shapeColor = color("blue");
  
  // bottom part two
  box8=createSprite(431,417,30,46);
  box8.shapeColor = color("pink");
  box9=createSprite(462,417,30,46);
  box9.shapeColor = color("pink");
  box10=createSprite(493,417,30,46);
  box10.shapeColor = color("pink");
  box11=createSprite(524,417,30,46);
  box11.shapeColor = color("pink");
  box12=createSprite(555,417,30,46);
  box12.shapeColor = color("pink");
  
  //second last bootom part

box13=createSprite(462,370,30,46);
box13.shapeColor = color("green");
box14=createSprite(493,370,30,46);
box14.shapeColor = color("green");
box15=createSprite(524,370,30,46);
box15.shapeColor = color("green");

//top
box16=createSprite(493,323,30,46);


//second pyramid

box16= createSprite(1000,200,30,46);
box16.shapeColor = color("blue");
box17= createSprite(1031,200,30,46);
box17.shapeColor = color("blue");
box18= createSprite(1062,200,30,46);
box18.shapeColor = color("blue");
box19= createSprite(1093,200,30,46);
box19.shapeColor = color("blue");
box20= createSprite(1124,200,30,46);
box20.shapeColor = color("blue");


box21= createSprite(1031,153,30,46);
box21.shapeColor = color("green");
box22= createSprite(1062,153,30,46);
box22.shapeColor = color("green");
box23=createSprite(1093,153,30,46);
box23.shapeColor = color("green");

//top
box24=createSprite(1062,106,30,46);
box24.shapeColor = color("pink");

rect = createSprite(100,400,30,30);
rect.shapeColor = color("yellow");


 background("black");  
  drawSprites();

//display
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  rect.display();
 
  
}
function museDragged(){
  rect.body.position.x=mouseX;
  rect.body.position.y=mouseY;
}

