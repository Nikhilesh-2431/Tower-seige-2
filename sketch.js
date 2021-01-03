const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box

function setup() {

  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;

  box=new Block(555,469)
  box2=new Block(525,469)
  box3=new Block(495,469)
  box4=new Block(465,469)
  box5=new Block(585,469)
  box6=new Block(615,469)
  box7=new Block(645,469)

  box8=new Block(495,429)
  box9=new Block(525,429)
  box10=new Block(585,429)
  box11=new Block(615,429)
  box12=new Block(555,429)

  box13=new Block(585,389)
  box14=new Block(525,389)
  box15=new Block(555,389)

  box16=new Block(555,349)

  ball=new Ball(260,470)

  ground=new Ground(750,690,1500,20)
  ground2=new Ground(550,500,300,20)

  rope=new Rope(ball.body,{x:260,y:430})

}

function draw() {

  Engine.update(engine);

  background(0);  

  box.displaydark();
  box2.displaydark();
  box3.displaydark();
  box4.displaydark();
  box5.displaydark();
  box6.displaydark();
  //box.displaydark();
  box7.displaydark();

  box8.displaypink();
  box9.displaypink();
  box10.displaypink();
  box11.displaypink();
  box12.displaypink();

  box13.displayblue();
  box14.displayblue();
  box15.displayblue();

  box16.displaygrey();

  ground.display();
  ground2.display();

  ball.display();

  rope.display();

  //console.log(box8.box.position.y)
  
  drawSprites();
}
function mouseDragged(){

  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  rope.fly()
}
function keyPressed(){
  if (keyCode===32){
    rope.attach(ball.body)
    Matter.Body.setPosition(ball.body,{x:260,y:470})
  }
}