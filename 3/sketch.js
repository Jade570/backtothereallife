let crash, openhh, hihat, snare, kick;
let user, bot, drone;
let usercol, botcol, dronecol;
let leftkey, rightkey, downkey, upkey, spacekey, dkey, fkey;
let nextbutton, replaybutton;
let skybox, wallfront, wallside;
let titlefont, font;

//game variables
let turn = -1;
let lightbrightness = 50;
let bottg;
let time, ttime;

function turncontrol(){
  if (turn == -2){
    retryscene();
  }

  if (turn == -1){
    chapterscene();
  }
  if (turn == 0){
      toggleon();
    lightbrightness +=1;
    if (lightbrightness > 128){
      lightbrightness = 128;
    }
    user.xaxis -= 5;
    bot.xaxis -= 5;
    drone.xaxis += 5;
    if (user.xaxis < windowWidth/5){
      user.xaxis = windowWidth/5;
      bot.xaxis = -windowWidth/5;
      drone.xaxis = -width/2.5;
    }

    if (drone.xaxis == -width/2.5 && lightbrightness == 128){
      turn += 1;
    }
    if (keyIsPressed){
      turn = -2;
    }
  }
  if (turn == 1){
      toggleon();
    drone.beamstart = true;
    if (drone.beamtoggle == true){
      bot.leftarm.state = "sethurray";
      bot.rightarm.state="sethurray";
      bottg = true;
    }
    if (bottg == true){
      Pd.send('sethurray', ['bang']);
      bottg = false;
      turn +=1;
    }
    if (keyIsPressed){
      turn = -2;
    }
  }

  if (turn == 2){
      toggleon();
    if (bot.leftarm.state == "static"){
      turn +=1;
    }
    if (keyIsPressed){
      turn = -2;
    }
  }

  if (turn == 3){
      toggleon();
    bot.leftarm.state = "resethurray";
    bot.rightarm.state="resethurray";
    bottg = true;
    if (bottg == true){
      Pd.send('resethurray', ['bang']);
      bottg = false;
      turn += 1;
    }
    if (keyIsPressed){
      turn = -2;
    }
  }
  if (turn == 4){
      toggleon();
    if (bot.leftarm.state == "static"){
      turn +=1;
    }
    if (keyIsPressed){
      turn = -2;
    }
  }

  if (turn == 5){
      toggleon();
    drone.xaxis += 5;
    if (drone.xaxis >= windowWidth/5*2-width/2.5){
      drone.xaxis = windowWidth/5*2-width/2.5;
      turn += 1;
    }
    if (keyIsPressed){
      turn = -2;
    }
  }

  if (turn == 6){
      toggleon();
      movementcontrol();
    if (keyIsPressed){
      if (upkey > 0 && upkey <4){

      }
      else if (upkey>=4){
        turn += 1;
      }
      else {
        turn = -2;
      }
    }
  }

  if (turn == 7){
    if (user.leftarm.state=="static"){
      turn += 1;
    }
  }

  if (turn == 8){
    toggleon();
    movementcontrol();
  if (keyIsPressed){
    if (upkey > 0 && upkey <4){

    }
    else if (upkey>=4){
      turn += 1;
    }
    else {
      turn = -2;
    }
  }
  }
  if (turn == 9){
    if (user.leftarm.state=="static"){
      turn += 1;
    }
  }
  if (turn == 10){
    user.xaxis -= 5;
    bot.xaxis -= 5;
    drone.xaxis += 5;
    nextscene();
  }
}
function toggleon(){
  if (keyIsPressed){
    switch (keyCode){
      case LEFT_ARROW:
        leftkey+=1;
      break;

      case RIGHT_ARROW:
        rightkey+=1;
      break;

      case UP_ARROW:
        upkey+=1;
      break;

      case DOWN_ARROW:
        downkey+=1;
      break;
    }
    switch (key){
      case ' ':
        spacekey += 1;
      break;

      case 'd':
        dkey += 1;
      break;

      case 'f':
        fkey += 1;
      break;
    }
  }
}
function movementcontrol(){
  if (leftkey == 1){
    if ((user.leftarm.y.from==false && user.leftarm.y.to==false)
      ||(user.leftarm.y.from==true && user.leftarm.y.to==false)){
        user.leftarm.state = "setleft";
        Pd.send('setleftarm', ['bang']);
    }
    else if ((user.leftarm.y.from==true && user.leftarm.y.to==true)
      ||(user.leftarm.y.from==false && user.leftarm.y.to==true)){
        user.leftarm.state = "resetleft";
        Pd.send('resetleftarm', ['bang']);
    }
  }
  else if (rightkey == 1){
    if ((user.rightarm.y.from==false && user.rightarm.y.to==false)
      ||(user.rightarm.y.from==true && user.rightarm.y.to==false)){
        user.rightarm.state = "setright";
        Pd.send('setrightarm', ['bang']);
    }
    else if ((user.rightarm.y.from==true && user.rightarm.y.to==true)
      ||(user.rightarm.y.from==false && user.rightarm.y.to==true)){
        user.rightarm.state = "resetright";
        Pd.send('resetrightarm', ['bang']);
    }
  }
  else if (upkey == 1){
    print("hi");
    if ((user.rightarm.x.from==false && user.rightarm.x.to==false)
      ||(user.rightarm.x.from==true && user.rightarm.x.to==false)){
        user.leftarm.state = "sethurray"
        user.rightarm.state = "sethurray";
        Pd.send('sethurray', ['bang']);
    }
    else if ((user.rightarm.x.from==true && user.rightarm.x.to==true)
      ||(user.rightarm.x.from==false && user.rightarm.x.to==true)){
        user.leftarm.state="resethurray";
        user.rightarm.state = "resethurray";
        Pd.send('resethurray', ['bang']);
    }
  }

  else if (downkey == 1){
    if ((user.rightarm.x.from==false && user.rightarm.x.to==false)
      ||(user.rightarm.x.from==true && user.rightarm.x.to==false)){
        user.leftarm.state = "setclap"
        user.rightarm.state = "setclap";
        Pd.send('setclap', ['bang']);
    }
    else if ((user.rightarm.x.from==true && user.rightarm.x.to==true)
      ||(user.rightarm.x.from==false && user.rightarm.x.to==true)){
        user.leftarm.state="resetclap";
        user.rightarm.state = "resetclap";
        Pd.send('resetclap', ['bang']);
    }
  }

  else if (spacekey == 1){
    if ((user.rightleg.x.from==false && user.rightleg.x.to==false)
      ||(user.rightleg.x.from==true && user.rightleg.x.to==false)){
        user.leftleg.state = "setlegs"
        user.rightleg.state = "setlegs";
        Pd.send('setlegs', ['bang']);
    }
    else if ((user.rightleg.x.from==true && user.rightleg.x.to==true)
      ||(user.rightleg.x.from==false && user.rightleg.x.to==true)){
        user.leftleg.state="resetlegs";
        user.rightleg.state = "resetlegs";
        Pd.send('resetlegs', ['bang']);
    }
  }

  else if (dkey == 1){
    if ((user.leftleg.x.from==false && user.leftleg.x.to==false)
      ||(user.leftleg.x.from==true && user.leftleg.x.to==false)){
        user.leftleg.state = "setleft";
        Pd.send('setleftleg', ['bang']);
    }
    else if ((user.leftleg.x.from==true && user.leftleg.x.to==true)
      ||(user.leftleg.x.from==false && user.leftleg.x.to==true)){
        user.leftleg.state="resetleft";
        Pd.send('resetleftleg', ['bang']);
    }
  }

  else if (fkey == 1){
    if ((user.rightleg.x.from==false && user.rightleg.x.to==false)
      ||(user.rightleg.x.from==true && user.rightleg.x.to==false)){
        user.rightleg.state = "setright";
        Pd.send('setrightleg', ['bang']);
    }
    else if ((user.rightleg.x.from==true && user.rightleg.x.to==true)
      ||(user.rightleg.x.from==false && user.rightleg.x.to==true)){
        user.rightleg.state="resetright";
        Pd.send('resetrightleg', ['bang']);
    }
  }
}
function preload(){
  skybox = loadShader('../js/skybox.vert', '../js/skybox.frag');
  snare = loadSound("../assets/snare.wav");
  kick = loadSound("../assets/kick.wav");
  wall = loadImage("../assets/wall.jpg");
  wallside = loadImage("../assets/wallside.jpg");
  titlefont = loadFont("../assets/FasterOne.ttf");
  font = loadFont("../assets/Electrolize.ttf");
}

function chapterscene(){
  push();
  rotateX(HALF_PI);
  translate(-windowWidth/2+10,-windowHeight/3,0);
  fill(255);
  textFont(titlefont);
  textSize(0.1*windowWidth);
  text('Chapter 1', 0, 0);

  translate(30, 0.09*windowWidth,0);
  textSize(0.06*windowWidth);
  text('On the Conveyor belt', 0, 0);

  textFont(font);
  translate(30, 0.11*windowWidth,0);
  textSize(0.04*windowWidth);
  text("My spy robot has first visited\n to the conveyor belt.\nLooks like this is a belt for\n checking the poor robot.. \nMaybe we should follow \nwhat the other robot does.", 0, 0);
  pop();
}
function retryscene(){
  lightbrightness = 50;
  push();
  rotateX(HALF_PI);
  translate(-windowWidth/2+10,-windowHeight/3,0);
  textFont(font);
  translate(30, 0.11*windowWidth,0);
  textSize(0.04*windowWidth);
  text("Oops, we have been discovered. \n The future for our humanity \n has just been vanished..", 0, 0);
  pop();
  replaybutton.show();
}
function nextscene(){
  lightbrightness = 50;
  push();
  rotateX(HALF_PI);
  translate(-windowWidth/2+10,-windowHeight/3,0);
  textFont(font);
  translate(30, 0.11*windowWidth,0);
  textSize(0.04*windowWidth);
  text("We just passed \n the first room of the fortress! \n Let's move on.", 0, 0);
  pop();
  nextbutton.show();
}



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  time = 0;
  ttime = 0;

  noStroke();
  textureMode(NORMAL);
  setupCubeMap();

  colorMode(HSB, 360, 100, 100);

  usercol = color(0,100,100);
  botcol = color(10,100,70);
  dronecol = color(146,77,29);

  user = new Robot(0.7,0,usercol,windowWidth/5+500,0,0,0,0,0);
  bot = new Robot(0.7,1,botcol,-windowWidth/5+500,0,0,0,0,0);
  drone = new Drone(0.5, dronecol, -width/3-500, 350, -(height/2), -radians(60),0,radians(10));
  leftkey = 0;
  rightkey = 0;
  downkey = 0;
  upkey = 0;
  spacekey = 0;
  dkey = 0;
  fkey = 0;

  replaybutton = createButton('replay');
  replaybutton.position(windowWidth/2-75, windowHeight-200);
  replaybutton.mousePressed(function(){
    window.location.replace("../3/index.html");
  });
  replaybutton.hide();

  nextbutton = createButton('next');
  nextbutton.position(windowWidth/2-75, windowHeight-200);
  nextbutton.mousePressed(function(){
    window.location.replace("../4/index.html");
  });
  nextbutton.hide();

  Pd.receive('snare', function(args){
    if (args == "bang"){
      snare.play();
    }
  });
  Pd.receive('kick', function(args){
    if (args == "bang"){
      kick.play();
    }
  });
}

function draw() {
  rotateX(HALF_PI);
  rotateZ(-PI);
  rotateY(PI);

  translate(0,0,50);

  background(0);
  renderSkybox();

  turncontrol();


  colorMode(RGB, 255,255,255);
  ambientLight(lightbrightness, lightbrightness, lightbrightness);
  directionalLight(lightbrightness, lightbrightness, lightbrightness,0,0,-1);

  colorMode(HSB, 360, 100, 100);


  //conveyer belt
  push();
  translate(0,0,170);
  noStroke();
  fill(0,0,15);
  box(10000, 500, 10);

  translate(0,0,50);
  box(10000, 500, 10);
  pop();

  user.render();
  bot.render();
  drone.render();

  // light set-up
  ambientLight(150, 150, 150);

  // movement controls

  movementcontrol();
  //robot movements
  user.movements();
  bot.movements();
}


function keyReleased() {
    switch (keyCode){
      case LEFT_ARROW:
        leftkey = 0;
      break;

      case RIGHT_ARROW:
        rightkey = 0;
      break;

      case UP_ARROW:
        upkey = 0;
      break;

      case DOWN_ARROW:
        downkey = 0;
      break;
    }
    switch(key){
      case ' ':
        spacekey = 0;
      break;

      case 'd':
        dkey = 0;
      break;

      case 'f':
        fkey = 0;
      break;
    }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function mouseClicked(){
  if (turn == -1){
    print (millis());
    turn +=1;
  }

  /*
  if (drone.beamtoggle == false){
    drone.beamstart = true;
  }
  else{
    drone.beamend = true;
  }
  */
}
