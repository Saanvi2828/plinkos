const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    for (var k=0;k <=480;k=k+80){
        divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
      }
      
      for (var j = 40;j<=480; j=j+40){
          plinkos.push(new Plinko(j,75))
      }
      
      for (var j = 20;j<=480-10;j=j+40){
          plinkos.push(new Plinko(j,175))
      }

      for (var j = 40;j<=480-20;j=j+40){
        plinkos.push(new Plinko(j,275))
    }

    for (var j = 20;j<=480-30;j=j+40){
        plinkos.push(new Plinko(j,375))
    }

    ground = new Ground(width/2,790,480,20);
    
}

function draw(){
    background("black")
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    for (var i=0;i<divisions.length;i+=1){
        divisions[i].display()
    }
      
    if (frameCount%60===0){
        particles.push(new Particles(random(width/2-10,width/2+10),10,10))
    }

    for (var i=0;i<particles.length;i+=1){
        particles[i].display()
    }

    for (var i=0;i<plinkos.length;i+=1){
        plinkos[i].display()
    }
}

