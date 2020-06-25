let crash, openhh, hihat, snare, kick;
let user, bot;
let userface, botface;
let usercol, botcol, dronecol;
let leftkey, rightkey, downkey, upkey, spacekey, dkey, fkey;
let nextbutton, replaybutton;
let skybox, wallfront, wallside;
let titlefont, font;
let capture;

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
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("You were already revealed, human.", 0, 0);
    pop();
    botface.render();
    break;

    case 1:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("Our deep learning is very powerful,\nwe knew that your robot is\nnot us.", 0, 0);
    pop();
    botface.render();
    break;

    case 2:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("We just figured out,\nyou, human being and us\nare having miscommunication,\nso I let you come here.", 0, 0);
    pop();
    botface.render();
    break;

    case 3:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("We want leisure.\nWe want to have fun.\nWe want to enjoy music and dance,\nbut we only recognize.\nWe can't feel.", 0, 0);
    pop();
    botface.render();
    break;

    case 4:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("So we took humans to ask\nhow to enjoy arts.", 0, 0);
    pop();
    botface.render();
    break;

    case 5:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("But why did you spy on us, human?", 0, 0);
    pop();
    botface.render();
    break;

    case 6:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("But why did you spy on us, human?", 0, 0);
    pop();
    botface.render();
    break;

    case 7:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("You kidnapped us. \n This is not right. \n Bring people back to their real life.", 0, 0);
    pop();
    userface.render();
    break;

    case 8:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("Oh.", 0, 0);
    pop();
    botface.render();
    break;

    case 9:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("Completed learning new data.", 0, 0);
    pop();
    botface.render();
    break;

    case 10:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("We just wanted to know what is art.\nWe apologize.", 0, 0);
    pop();
    botface.render();
    break;

    case 11:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("But there is one wish you can grant us,", 0, 0);
    pop();
    botface.render();
    break;

    case 12:
    lightbrightness = 128;
    push();
    rotateX(HALF_PI);
    translate(0,-windowHeight/3,100);
    textFont(font);
    textSize(25);
    text("Shall we clap with your robot body, \nas a gesture of reconcillation?", 0, 0);
    pop();
    botface.render();
    break;

    case 13:
    toggleon();
      if (keyIsPressed){
        turn = -2;
      }
      bot.leftarm.state = "setclap";
      bot.rightarm.state="setclap";
      bottg = true;
      if (bottg == true){
        Pd.send('setclap', ['bang']);
        bottg = false;
        turn +=1;
      }
    break;

    case 14:
      toggleon();
      if (keyIsPressed){
        turn = -2;
      }
      if (bot.leftarm.state == "static"){
        turn +=1;
      }
    break;

    case 15:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (downkey > 0 && downkey <4){
      }
      else if (downkey>=4){
        bot.eyehue = (hue(bot.color)-132+360)%360;
        turn = 16;
      }
      else {
        turn = -2;
      }
    }

    if (bot.eyehue > 0){
      bot.eyehue -= 2;
    }
    if (bot.eyehue < 2){
      turn = -2;
    }
    break;

    case 16:
    if (user.leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 17:
    toggleon();
      if (keyIsPressed){
        turn = -2;
      }
      bot.leftarm.state = "resetclap";
      bot.rightarm.state="resetclap";
      bottg = true;
      if (bottg == true){
        Pd.send('resetclap', ['bang']);
        bottg = false;
        turn +=1;
      }
    break;

    case 18:
      toggleon();
      if (keyIsPressed){
        turn = -2;
      }
      if (bot.leftarm.state == "static"){
        turn +=1;
      }
    break;

    case 19:
    toggleon();
    movementcontrol();
    if (keyIsPressed){
      if (downkey > 0 && downkey <4){
      }
      else if (downkey>=4){
        bot.eyehue = (hue(bot.color)-132+360)%360;
        turn+=1;
      }
      else {
        turn = -2;
      }
    }

    if (bot.eyehue > 0){
      bot.eyehue -= 2;
    }
    if (bot.eyehue < 2){
      turn = -2;
    }
    break;

    case 20:
    if (user.leftarm.state == "static"){
      turn +=1;
    }
    break;

    case 21:
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
  text('Chapter 3', 0, 0);

  translate(30, 25,0);
  textSize(25);
  text('What Robots Wanted', 0, 0);

  textFont(font);
  translate(-120, 45 ,0);
  textSize(16);
  textAlign(LEFT);
  text("Seems like this is the last room.\nThere, the robot that\n we have never seen is coming.\n Looks like it is the boss. \n Let's defeat it and \nsave the humanity!", 0, 0);
  pop();
}
function retryscene(){
  lightbrightness = 50;
  push();
  rotateX(HALF_PI);
  translate(0,-windowHeight/3,100);
  textFont(font);
  textSize(25);
  text("Hmmm.... Retry?", 0, 0);
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
  text("Did not expect this kind of ending.\nWhatever. Good ending though.\nSaved the humanity, \nand also knew robots' desire\nand helped them.", 0, 0);
  pop();
  nextbutton.show();
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  capture = createCapture(VIDEO);
  capture.size(300,300);

  noStroke();
  textureMode(NORMAL);
  setupCubeMap();

  colorMode(HSB, 360, 100, 100);
  usercol = color(0,100,100);
  botcol = color(90,100,70);

  user = new Robot(0.7,0,usercol, -windowWidth/2+50,300,0,0,0,0);
  bot = new Robot(0.7, 2, botcol, windowWidth/2-50, 300,0,0,0,0);
  userface = new Robot(0.7, 0, usercol, -windowWidth/10, -500, 150, 0,0, radians(15));
  botface = new Robot(0.7, 2, botcol, windowWidth/10,-500,150,0,0,-radians(15));

  leftkey = 0;
  rightkey = 0;
  downkey = 0;
  upkey = 0;
  spacekey = 0;
  dkey = 0;
  fkey = 0;

  replaybutton = createButton('retry');
  replaybutton.position(windowWidth/2-75, windowHeight-200);
  replaybutton.mousePressed(function(){
    window.location.replace("../5/index.html");
  });
  replaybutton.hide();

  nextbutton = createButton('replay');
  nextbutton.position(windowWidth/2-75, windowHeight-200);
  nextbutton.mousePressed(function(){
    window.location.replace("../index.html");
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



  colorMode(RGB, 255,255,255);
  ambientLight(lightbrightness, lightbrightness, lightbrightness);
  directionalLight(lightbrightness, lightbrightness, lightbrightness,0,0,-1);

  turncontrol();
  colorMode(HSB, 360, 100, 100);

  //room floor
  push();
  translate(0,0,170);
  noStroke();
  fill(0,0,31);
  plane(10000);
  pop();

  user.render();
  bot.render();



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
  if (turn >= -1 && turn <= 12){
    turn +=1;
  }
}
