const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var block1,stand,polygon,backgroundImg;
var ground,polygon_img,slingshot;

var score = 0;

function preload(){
    getBackgroundImg();

    bg = "yellow";

    polygon_img = loadImage("polygon.png");
}


function setup() {
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(450,235,30,40);
    block6 = new Box(360,195,30,40);
    block7 = new Box(390,195,30,40);
    block8 = new Box(420,195,30,40);
    block9 = new Box(390,155,30,40);
    block10 = new Box(930,235,30,40);
    block11 = new Box(960,235,30,40);
    block12 = new Box(390,235,30,40);
    block13 = new Box(1020,235,30,40);
    block14 = new Box(1050,255,30,40);
    block15 = new Box(960,195,30,40);
    block16 = new Box(990,195,30,40);
    block17 = new Box(1020,195,30,40);
    block18 = new Box(990,155,30,40);

    this.polygon = Bodies.circle(50,200,20);
    World.add(world,this.polygon);

    slingshot = new Sling(this.polygon,{x:100,y:200});

    stand = new Ground(1000, 380, 10000,20);
    stand1 = new Ground(1000, 250, 200, 15);
    stand2 = new Ground(400, 350, 200, 15);
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

        noStroke();

    Engine.update(engine);

    text("SCORE : " +score,750,40);
    textSize(20);
    fill("orange");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    stand.display();
    stand1.display();
    stand2.display();


    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();


    imageMode(CENTER);
    image(polygon_img,this.polygon.position.x, this.polygon.position.y,40,40);
    
    slingshot.display();

    drawSprites();

    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}



async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=18){
        bg="light.jpg";
    }
    else{
        bg="dark.jpg";
    }

    backgroundImg = loadImage(bg);
};

