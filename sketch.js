const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,750,480,30);
 /* div1 = new Division(10,635,10,200);
  div2 = new Division(100,635,10,200);
 div3 = new Division(200,635,10,200);
 div4 = new Division(300,635,10,200);
 div5  = new Division(400,635,10,200);*/
/* for (var k = 0 ; k <=width ; k = k + 80){
   divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
   divisions[k].display();
   console.log("manasa");
 }*/
 
 for (var j = 40; j <=width; j=j+50){
   plinkos.push(new Plinko(j,75));
 }
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for(k=0  ; k<=divisions.length ; k++){
    divisions[k].display();
  }
 /* div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();*/
  
}