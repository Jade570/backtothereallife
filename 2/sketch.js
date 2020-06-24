let crash, openhh, hihat, snare, kick;
let user;
let usercol;
let leftkey, rightkey, downkey, upkey, spacekey, dkey, fkey;
let startbutton;




function bgmusic(){
  //beat
  setInterval(function(){Pd.send('beat', [0]);}, 8000*0.5);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [1]);}, 8000*0.5);
  },1000*0.5);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [2]);}, 8000*0.5);
  },2000*0.5);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [3]);}, 8000*0.5);
  },3500*0.5);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [4]);}, 8000*0.5);
  },4000*0.5);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [5]);}, 8000*0.5);
  },5000*0.5);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [6]);}, 8000*0.5);
  },6000*0.5);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [7]);}, 8000*0.5);
  },7000*0.5);

  //chord
  setInterval(function(){
       Pd.send('d', [0]); chordtoggle = 0;
     }, 8000*0.5);
   setTimeout(function(){setInterval(function(){
       Pd.send('d', [1]); chordtoggle = 1;
     }, 8000*0.5);}, 2000*0.5);
   setTimeout(function(){setInterval(function(){
       Pd.send('d', [2]); chordtoggle = 2;
     }, 8000*0.5);}, 4000*0.5);
   setTimeout(function(){setInterval(function(){
       Pd.send('d', [3]); chordtoggle = 3;
     }, 8000*0.5);}, 6000*0.5);

  //volume
     setInterval(function(){
       Pd.send('vol', [0]);
     }, 1000*0.5);

     setTimeout(function(){
       setInterval(function(){
         Pd.send('vol', [1]);
       }, 1000*0.5);
     }, 500*0.5);
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
  snare = loadSound("../assets/snare.wav");
  kick = loadSound("../assets/kick.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //bgmusic();
  colorMode(HSB, 360, 100, 100);

  usercol = color(0,100,100);
  user = new Robot(1,0,usercol,0,0,0,0,0,0);
  leftkey = 0;
  rightkey = 0;
  downkey = 0;
  upkey = 0;
  spacekey = 0;
  dkey = 0;
  fkey = 0;

  startbutton = createButton('start');
  startbutton.position(windowWidth-200, windowHeight-200);
  startbutton.mousePressed(function(){
    window.location.replace("../3/index.html");
  });

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


  orbitControl();

  rotateX(HALF_PI);
  rotateZ(-PI);
  rotateY(PI);

  colorMode(RGB, 255,255,255);
  lights();

  background(0);

  colorMode(HSB, 360, 100, 100);

  push();
  translate(0,0,250);
  noStroke();
  plane(10000);
  pop();

  user.render();
  // light set-up
  ambientLight(150, 150, 150);

// movement controls
toggleon();
movementcontrol();
//robot movements
user.movements();
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
