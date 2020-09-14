const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box,box1,box2,box3,box4,rock,box5,box6,ground,slingshot

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    box = new Box(400,200);
    box1 = new Box(350,250);
    box2 = new Box(450,250);
    box3 = new Box(400,300);    
    box4 = new Box(300,300);
    box5 = new Box(500,300);

    ground = new Ground(400,350,800,10)

    rock = new Rock();

    slingshot = new SlingShot(rock.body,{x:200,y:100})
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  rock.display();
  ground.display();
  slingshot.display();

  drawSprites();
}

/*function keyPressed() {

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:140,y:500})

	}

}*/

function mouseDragged(){

    Matter.Body.setPosition(rock.body,{x:mouseX , y:mouseY})

}

function mouseReleased(){
    slingshot.fly();
}