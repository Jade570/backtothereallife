let crash, openhh, hihat, snare, kick;
let user, bot=[], drone;
let usercol, botcol, dronecol;
let leftkey, rightkey, downkey, upkey, spacekey, dkey, fkey;
let nextbutton, replaybutton;
let skybox, wallfront, wallside;
let titlefont, font;

//game variables
let turn = -1;
let lightbrightness = 50;
let bottg;

function turncontrol(){
  switch (turn){
    case -2:
    retryscene();
    break;

    case -1:
    chapterscene();
    break;

    case 0:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    lightbrightness +=1;
    if (lightbrightness > 128){
      lightbrightness = 128;
    }
    if (lightbrightness == 128){
      turn +=1;
    }
    break;

    case 1:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[0].leftarm.state = "sethurray";
    bot[0].rightarm.state="sethurray";
    bottg = true;
    if (bottg == true){
      Pd.send('sethurray', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 2:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[0].leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 3:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[0].leftarm.state = "resethurray";
    bot[0].rightarm.state="resethurray";
    bottg = true;
    if (bottg == true){
      Pd.send('resethurray', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 4:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[0].leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 5:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[1].leftleg.state = "setlegs";
    bot[1].rightleg.state = "setlegs";
    bot[2].leftleg.state = "setlegs";
    bot[2].rightleg.state = "setlegs";
    bottg = true;
    if (bottg == true){
      Pd.send('setlegs', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 6:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[1].leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 7:
    toggleon();
    movementcontrol();

    bot[1].leftleg.state = "resetlegs";
    bot[1].rightleg.state = "resetlegs";
    bot[2].leftleg.state = "resetlegs";
    bot[2].rightleg.state = "resetlegs";
    bottg = true;
    if (bottg == true){
      Pd.send('resetlegs', ['bang']);
      if (keyIsPressed){
        if (spacekey > 0){
          bottg = false;
          turn += 2;
        }
        else {
          bottg = false;
          turn = -2;
        }
      }
      else if (keyIsPressed == false){
          bottg = false;
          turn += 1;
      }
    }
    break;

    case 8:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (spacekey > 0 && spacekey <4){

      }
      else if (spacekey>=4){
        for (let i = 0; i< 3; i++){
            bot[i].eyehue = (hue(bot[i].color)-132+360)%360;
        }
        turn += 1;
      }
      else {
        turn = -2;
      }
    }
    for (let i = 0; i< 3; i++){
      if (bot[i].eyehue > 0){
        bot[i].eyehue -= 2;
      }
      if (bot[i].eyehue < 2){
        turn = -2;
      }
    }
    break;

    case 9:
    if (user.leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 10:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (spacekey > 0 && spacekey <4){

      }
      else if (spacekey>=4){
        for (let i = 0; i< 3; i++){
            bot[i].eyehue = (hue(bot[i].color)-132+360)%360;
        }
        turn += 1;
      }
      else {
        turn = -2;
      }
    }
    for (let i = 0; i< 3; i++){
      if (bot[i].eyehue > 0){
        bot[i].eyehue -= 2;
      }
      if (bot[i].eyehue < 2){
        turn = -2;
      }
    }
    break;

    case 11:
    if (user.leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 12:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[1].leftarm.state = "sethurray";
    bot[1].rightarm.state="sethurray";
    bottg = true;
    if (bottg == true){
      Pd.send('sethurray', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 13:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[1].leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 14:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[1].leftarm.state = "resethurray";
    bot[1].rightarm.state="resethurray";
    bottg = true;
    if (bottg == true){
      Pd.send('resethurray', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 15:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[1].leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 16:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[0].leftleg.state = "setlegs";
    bot[0].rightleg.state = "setlegs";
    bot[2].leftleg.state = "setlegs";
    bot[2].rightleg.state = "setlegs";
    bottg = true;
    if (bottg == true){
      Pd.send('setlegs', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 17:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[0].leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 18:
    toggleon();
    movementcontrol();

    bot[0].leftleg.state = "resetlegs";
    bot[0].rightleg.state = "resetlegs";
    bot[2].leftleg.state = "resetlegs";
    bot[2].rightleg.state = "resetlegs";
    bottg = true;
    if (bottg == true){
      Pd.send('resetlegs', ['bang']);
      if (keyIsPressed){
        if (spacekey > 0){
          bottg = false;
          turn += 2;
        }
        else {
          bottg = false;
          turn = -2;
        }
      }
      else if (keyIsPressed == false){
          bottg = false;
          turn += 1;
      }
    }
    break;

    case 19:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (spacekey > 0 && spacekey <4){

      }
      else if (spacekey>=4){
        for (let i = 0; i< 3; i++){
            bot[i].eyehue = (hue(bot[i].color)-132+360)%360;
        }
        turn += 1;
      }
      else {
        turn = -2;
      }
    }
    for (let i = 0; i< 3; i++){
      if (bot[i].eyehue > 0){
        bot[i].eyehue -= 2;
      }
      if (bot[i].eyehue < 2){
        turn = -2;
      }
    }
    break;

    case 20:
    if (user.leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 21:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (spacekey > 0 && spacekey <4){

      }
      else if (spacekey>=4){
        for (let i = 0; i< 3; i++){
            bot[i].eyehue = (hue(bot[i].color)-132+360)%360;
        }
        turn += 1;
      }
      else {
        turn = -2;
      }
    }
    for (let i = 0; i< 3; i++){
      if (bot[i].eyehue > 0){
        bot[i].eyehue -= 2;
      }
      if (bot[i].eyehue < 2){
        turn = -2;
      }
    }
    break;

    case 22:
    if (user.leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 23:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[2].leftarm.state = "sethurray";
    bot[2].rightarm.state="sethurray";
    bottg = true;
    if (bottg == true){
      Pd.send('sethurray', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 24:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[2].leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 25:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[2].leftarm.state = "resethurray";
    bot[2].rightarm.state="resethurray";
    bottg = true;
    if (bottg == true){
      Pd.send('resethurray', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 26:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[2].leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 27:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    bot[0].leftleg.state = "setlegs";
    bot[0].rightleg.state = "setlegs";
    bot[1].leftleg.state = "setlegs";
    bot[1].rightleg.state = "setlegs";
    bottg = true;
    if (bottg == true){
      Pd.send('setlegs', ['bang']);
      bottg = false;
      turn +=1;
    }
    break;

    case 28:
    toggleon();
    if (keyIsPressed){
      turn = -2;
    }
    if (bot[0].leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 29:
    toggleon();
    movementcontrol();

    bot[0].leftleg.state = "resetlegs";
    bot[0].rightleg.state = "resetlegs";
    bot[1].leftleg.state = "resetlegs";
    bot[1].rightleg.state = "resetlegs";
    bottg = true;
    if (bottg == true){
      Pd.send('resetlegs', ['bang']);
      if (keyIsPressed){
        if (spacekey > 0){
          bottg = false;
          turn += 2;
        }
        else {
          bottg = false;
          turn = -2;
        }
      }
      else if (keyIsPressed == false){
          bottg = false;
          turn += 1;
      }
    }
    break;

    case 30:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (spacekey > 0 && spacekey <4){

      }
      else if (spacekey>=4){
        for (let i = 0; i< 3; i++){
            bot[i].eyehue = (hue(bot[i].color)-132+360)%360;
        }
        turn += 1;
      }
      else {
        turn = -2;
      }
    }
    for (let i = 0; i< 3; i++){
      if (bot[i].eyehue > 0){
        bot[i].eyehue -= 2;
      }
      if (bot[i].eyehue < 2){
        turn = -2;
      }
    }
    break;

    case 31:
    if (user.leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 32:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (spacekey > 0 && spacekey <4){

      }
      else if (spacekey>=4){
        for (let i = 0; i< 3; i++){
            bot[i].eyehue = (hue(bot[i].color)-132+360)%360;
        }
        turn += 1;
      }
      else {
        turn = -2;
      }
    }
    for (let i = 0; i< 3; i++){
      if (bot[i].eyehue > 0){
        bot[i].eyehue -= 2;
      }
      if (bot[i].eyehue < 2){
        turn = -2;
      }
    }
    break;

    case 33:
    if (user.leftleg.state == "static"){
      turn +=1;
    }
    break;

    case 34:
    nextscene();
    break;
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
  textAlign(CENTER);
  push();
  rotateX(HALF_PI);
  translate(0,-windowHeight/3,100);
  fill(255);
  textFont(titlefont);
  textSize(50);
  text('Chapter 2', 0, 0);

  translate(30, 25,0);
  textSize(25);
  text('What are they doing?', 0, 0);

  textFont(font);
  translate(-120, 45 ,0);
  textSize(16);
  textAlign(LEFT);
  text("The second place is\njust a simple room.\nThe robots are making\nstrange movements,\nbut it looks like\nthere are rules.\nLet's decode it and make sure\n we are not detected.", 0, 0);
  pop();
}
function retryscene(){
  lightbrightness = 50;
  push();
  rotateX(HALF_PI);
  translate(0,-windowHeight/3,100);
  textFont(font);
  textSize(25);
  text("Oops, we have been discovered. \n The future for our humanity \n has just been vanished..", 0, 0);
  pop();
  replaybutton.show();
}
function nextscene(){
  lightbrightness = 50;
  push();
  rotateX(HALF_PI);
  translate(0,-windowHeight/3,100);
  textFont(font);
  textSize(25);
  text("Seriously, what were they doing?\n Hmmph, whatever. \n Let's keep moving on.", 0, 0);
  pop();
  nextbutton.show();
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  noStroke();
  textureMode(NORMAL);
  setupCubeMap();

  colorMode(HSB, 360, 100, 100);

  usercol = color(0,100,100);
  botcol = color(10,100,70);

  user = new Robot(0.7,0,usercol,windowWidth/2-50,300,0,0,0,-radians(30));
  bot[0] = new Robot(0.7, 1, botcol, -windowWidth/2+50, 300,0,0,0,radians(30));
  bot[1] = new Robot(0.7, 1, botcol, -100, 300,0,0,0,radians(15));
  bot[2] = new Robot(0.7, 1, botcol, 100, 300,0,0,0,-radians(15));


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
    window.location.replace("../4/index.html");
  });
  replaybutton.hide();

  nextbutton = createButton('next');
  nextbutton.position(windowWidth/2-75, windowHeight-200);
  nextbutton.mousePressed(function(){
    window.location.replace("../5/index.html");
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

  //room floor
  push();
  translate(0,0,170);
  noStroke();
  fill(0,0,31);
  plane(10000);
  pop();

  user.render();
  for (let i = 0; i<3; i++){
    bot[i].render();
  }

  // movement controls
  movementcontrol();

  //robot movements
  user.movements();
  for (let i = 0; i<3; i++){
    bot[i].movements();
  }
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
