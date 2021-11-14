const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,angle;
var arrow,canvas;
var palyer, playerBase, playerArcher;
var pArrows;
var playerArrows = [];


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15
  var options = {
    isStatic: true
  };

  
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(
    340,
    playerBase.position.y - 112,
    120,
    120
  );

  pArrows = new PlayerArrow(playerArcher.x, playerArcher.y);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  playerArcher.display(); 
   
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
   
}

// function keyReleased(){
//   if(keyCode === 32){
//     pArrows.shoot(PlayerArcher.body.angle)
// }
// }

function keyReleased(){ 
  if(keyCode === 32){  
    pArrows.shoot(playerArcher.body.angle)
  }
}

function keyPressed(){
 // console.log(keyCode)
  if(keyCode=== 32){ 
    var pArrows = new PlayerArrow(playerArcher.x, playerArcher.y);
   playerArrows.push(pArrows)
  }
}
function showCannonBalls(pArrows, i){
  if(pArrows){
    pArrows.display()
  }
}