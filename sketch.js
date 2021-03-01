var gameState = "start";
var fampic
var family
var trainimg
var link
var train;
var start;
var startimg;
var clue1;
var a1;
var dogbelt;
var footprints;
var dogprints;
var clap;
var trainSound;
var bg2;
var warrant;
var search;
var house;
var gaurd;
var gatekeeper;
var bone;
var clue3;
var board;
var tag;
var bg3;
function preload() {
  family = loadImage("sd game/family.png");
  trainimg = loadImage("sd game/Train-Station.jpg");
  startimg = loadImage("sd game/start.png")
  dogbelt = loadImage("sd game/dogbelt.png")
  footprints = loadImage("sd game/footprints.png");
  trainSound = loadSound("train whistle.wav");
  clap = loadSound("applause.wav");
  bg2 = loadImage("sd game/compartment.png");
  warrant = loadImage("sd game/search-warrant.jpg");
  house = loadImage("sd game/house.jpg");
  guard = loadImage("sd game/gatekeeper.png")
  bone = loadImage("sd game/bone.png");
  board = loadImage("sd game/board.jpg");
  //bg3=loadImage("sd game/");
}
  function setup() {
    createCanvas(1400, 700);
    fampic = createSprite(300, 500);
    fampic.addImage("fam", family);
    start = createSprite(1000, 600);
    start.addImage("gamestart", startimg);
  }

  function draw() {
    if (gameState === "start") {
      background("pink");
      textSize(40);
      fill("black");
      textStyle("bold");
      //textFont('Helvetica');
      text("Goal - Save the pet!", 520, 65);
      textSize(20);
      fill("green");
      textStyle("georgia");
      text("This little girl named Venziya lost her pet dog named Tommy. She wants you to save her pet.", 270, 400);
      textStyle("italic");
      fill("red");

      if (mousePressedOver(start)) {
        gameState = "level1";
      }
    }

    if (gameState === "level1") {
      background(trainimg);
      //trainSound.play();
      fampic.visible = false;
      start.visible = false;
      textSize(25);
      fill("black");
      textStyle("italic")
      text("CLUE :1 Find me on the thing which has  seats but , Its not a living room , ", 100, 100)
      text("Its sometimes a bullet but Its not fired out of a gun , It can be found in a subway but Its not a sandwich", 100, 130);

      clue1 = createSprite(830, 539, 50, 50);
      clue1.addImage("belt", dogbelt);
      clue1.scale = 1 / 15;

      if (mousePressedOver(clue1) && gameState === "level1") {
        clap.play();
        textSize(25);
        fill("red");
        textStyle("bold");
        text("WOW!! YOU ARE RIGHT.NOW TRY TO FIND THE FOOTPRINTS OF THE DOG FOR NEXT CLUE! ", 200, 180)
        gameState = "level2";
      }
    }
    if (gameState === "level2") {
      dogprints = createSprite(1305, 641, 50, 50);
      dogprints.addImage("foot", footprints);
      dogprints.scale = 1 / 18;
      //clue1.hide();
    }
    if (mousePressedOver(dogprints) && gameState === "level2") {
      clap.play();
      gameState = "level3";
    }

    if (gameState === "level3") {
      background(bg2);
      clue3 = createSprite(150, 333, 50, 50);
      clue3.addImage("bonedog", bone);
      clue3.scale = 1 / 15;
      textSize(20);
      fill("black");
      textStyle("bold");
      text("GREAT! THAT'S A CORRECT ANSWER.NOW LOOK FOR THE NEXT CLUE WHICH IS EVERY DOG'S FAVOURITE FOOD, ", 30, 380);
      text("AND GET READY TO RESCUE THE DOG",30,410)
      if (mousePressedOver(clue3)) {
        gameState = "level4"
      }
    }

    if (gameState === "level4") {
      background(house);
      search = createSprite(600, 580, 50, 50);
      search.addImage("searchwarrant", warrant);
      search.scale = 1 / 4;
      gatekeeper = createSprite(800, 550, 50, 50);
      gatekeeper.addImage("gate", guard);
      gatekeeper.scale = 1;
      textSize(30);
      textStyle("bold");
      fill("black");
      text("Now the gatekeeper is asking you to show him the search warrant and then only", 15, 30);
      text("he will allow you to enter the house and search for the pet", 15, 70);
      tag = createSprite(955, 515, 50, 50);
      tag.addImage("gatetag", board);
      tag.scale=1/6;
  }
      if (mousePressedOver(search)) {
        gamestate = "lastlevel";
      }
              
          /*if (gameState === "lastlevel") {
            background()
      }
   */ 
    drawSprites();
    }
  



