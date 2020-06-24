let crash, openhh, hihat, snare, kick;
let user;
let usercol;

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

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  //bgmusic();
  colorMode(HSB, 360, 100, 100);
  usercol = color(0,100,100);
  user = new Robot(1,0,usercol,0,0,0,0,0,0);
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
  user.render();
  // light set-up
  ambientLight(150, 150, 150);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}
