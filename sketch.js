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
  ground = new Ground(width/2,780,480,30);

  for (var k = 0 ; k <width ; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

 /* for(var i = 30;i<height/2;i+=35){
    for (var j = 40; j <width; j+=50){
      plinkos.push(new Plinko(j,i));
      console.log(plinkos);

    }
  }*/
  for (var j=40;j<width; j=j+50){
    plinkos.push(new Plinko(j,75));

  }
  for (var i=15; i<width; i=i+50){
    plinkos.push(new Plinko(i,175));
  }
  for (var j=40; j<width; j=j+50){
    plinkos.push(new Plinko(j,275));

  }
  for (var i=15; i<width; i=i+50){
    plinkos.push(new Plinko(i,375));
  }
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  for(k=0  ; k<divisions.length ; k++){
    divisions[k].display();
  }

  for(var j= 0; j < plinkos.length ; j++){
      plinkos[j].display();
  }
  for(var j= 0; j < plinkos.length ; j++){
    plinkos[j].display();
}
for(var i= 0; i < plinkos.length ; i++){
  plinkos[i].display();
}
for(var i= 0; i < plinkos.length ; i++){
  plinkos[i].display();
}

  
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10),10,10))
 }

  
  for(i = 0; i<particles.length ; i++){
    particles[i].display();
    console.log("manasa");
  }
  
  
}
