
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, chain;
var mango1,m2,m3,m4,m5,m6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	m2=new mango(900,200,30);
	m3=new mango(1000,150,30);
	m4=new mango(1150,175,30)
	m5=new mango(1200,230,30);
	m6=new mango(1000,80,30)
	m7= new mango(1050,260,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stoneObj=new Stone(230,230)
  chain=new Slingshot(stoneObj.body,{x:170,y:320})

	
	Engine.run(engine);

}

function draw() {

  background(230);
  textSize(20);
  fill(0)
  text(mouseX+","+mouseY,mouseX,mouseY)
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  treeObj.display();
  mango1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  chain.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  groundObject.display();
  stoneObj.display();
  chain.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain.fly();
}


function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		chain.attach(stone.body);
	}
}
