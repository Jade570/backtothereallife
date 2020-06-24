const WORLD_SIZE = 500;
const GRID_SIZE = 30;
let firstcam, orthocam, thirdcam;
let firsttoggle, thirdtoggle;

let t0;
let mov, theta;
let cam_x1, cam_y1, cam_z1;
let cam_x3, cam_y3, cam_z3;
let cam_cx1, cam_cy1, cam_cz1;
let cam_cx3, cam_cy3, cam_cz3;
let cam_dx1, cam_dy1, cam_dz1;
let cam_dx3, cam_dy3, cam_dz3;
let magenta, indigo, yellow, violet;
let jump_toggle, highest;;
let pan,tilt;
let forward, back, left, right;
let Bldgs = [];
let bldg_i = 0;

let chordtoggle;



function mouseDragged(){
  if(thirdtoggle){
      cam_dx3 += radians(movedX);
      cam_dz3 += radians(movedY);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)


  setInterval(function(){Pd.send('beat', [0]);}, 8000);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [1]);}, 8000);
  },1000);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [2]);}, 8000);
  },2000);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [3]);}, 8000);
  },3500);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [4]);}, 8000);
  },4000);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [5]);}, 8000);
  },5000);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [6]);}, 8000);
  },6000);
  setTimeout(function(){
      setInterval(function(){Pd.send('beat', [7]);}, 8000);
  },7000);

 setInterval(function(){
      Pd.send('d', [0]); chordtoggle = 0;
      if(Bldgs[bldg_i-1].h <= GRID_SIZE*2){
          Pd.send('melody', [74]);
      }
      else if(Bldgs[bldg_i-1].h <= GRID_SIZE*8){
          Pd.send('melody', [77]);
      }
      else{
        Pd.send('melody', [81]);
      }
    }, 8000);

  setTimeout(function(){setInterval(function(){
      Pd.send('d', [1]); chordtoggle = 1;
      if(Bldgs[bldg_i-1].h <= GRID_SIZE*2){
          Pd.send('melody', [74]);
      }
      else if(Bldgs[bldg_i-1].h <= GRID_SIZE*8){
          Pd.send('melody', [77]);
      }
      else{
        Pd.send('melody', [83]);
      }
    }, 8000);}, 2000);
  setTimeout(function(){setInterval(function(){
      Pd.send('d', [2]); chordtoggle = 2;
      if(Bldgs[bldg_i-1].h <= GRID_SIZE*2){
          Pd.send('melody', [72]);
      }
      else if(Bldgs[bldg_i-1].h <= GRID_SIZE*8){
          Pd.send('melody', [76]);
      }
      else{
        Pd.send('melody', [86]);
      }
    }, 8000);}, 4000);
  setTimeout(function(){setInterval(function(){
      Pd.send('d', [3]); chordtoggle = 3;
      if(Bldgs[bldg_i-1].h <= GRID_SIZE*2){
          Pd.send('melody', [76]);
      }
      else if(Bldgs[bldg_i-1].h <= GRID_SIZE*8){
          Pd.send('melody', [79]);
      }
      else{
        Pd.send('melody', [84]);
      }
    }, 8000);}, 6000);


    setInterval(function(){
      Pd.send('vol', [0]);
    }, 1000);

    setTimeout(function(){
      setInterval(function(){
        Pd.send('vol', [1]);
      }, 1000);
    }, 500);



  // init camera
  cam_x1 = 0;
  cam_y1 = 100;
  cam_z1 = GRID_SIZE;
  cam_dx1 = 0;
  cam_dy1 = -1;
  cam_dz1 = 0;

  cam_x3 = windowHeight*0.75;
  cam_y3 = windowHeight/2;
  cam_z3 = windowHeight/4;
  cam_dx3 = 0;
  cam_dz3 = 1;

  tilt = 0;
  pan = 0;
  mov = 0;
  highest = false;
  firsttoggle = true;
  thirdtoggle = false;

  jump_toggle = false;
  forward = false;
  back = false;
  left = false;
  right = false;
  updateCamCenter();

  firstcam = createCamera();
  firstcam.camera(cam_x1, cam_y1, cam_z1,cam_cx1, cam_cy1, cam_cz1,0,0,-1);


  thirdcam = createCamera();
  thirdcam.camera(cam_x3*cos(cam_dx3), cam_x3*sin(cam_dx3), cam_z3*(cam_dz3), 0, -1, 0,0,0,-1);

  orthocam = createCamera();
  orthocam.setPosition(0, 0, windowHeight);
  orthocam.lookAt(0, 0, 0);
  orthocam.ortho();

  violet = color(80, 18, 110 , 200); // violet
  indigo = color(19, 0, 163, 200); // indigo
  yellow = color(255, 208, 0, 200); // yellow
  magenta = color(237, 0, 158, 200); //magenta

}

function draw() {
  background(0);


  // light set-up
  ambientLight(150, 150, 150);


  firstcam.camera(cam_x1, cam_y1, cam_z1,cam_cx1, cam_cy1, cam_cz1,0,0,-1);
  thirdcam.camera(cam_x3*cos(cam_dx3), cam_x3*sin(cam_dx3), cam_z3*(cam_dz3), 0, -1, 0,0,0,-1);

  if (firsttoggle == true) {
    setCamera(firstcam);

    pan += movedX/64;
    tilt -= movedY/128;
    updateCamCenter();

    handleUserInput();
  }
    else if (thirdtoggle == true) {
    setCamera(thirdcam);
  } else {
    setCamera(orthocam);
  }


  //world plane set-up
  noStroke();


  strokeWeight(0.5);

  switch(chordtoggle){
    case 0:
    stroke(255, 94, 223);

    break;

    case 1:
    stroke(255, 248, 110);
    break;

    case 2:
    stroke(69, 187, 255);
    break;

    case 3:
    stroke(212, 0, 255);
    break;
  }

  for(i=0; i<WORLD_SIZE/GRID_SIZE; i++){
    line(-WORLD_SIZE/2+i*GRID_SIZE, -WORLD_SIZE/2,0.1,-WORLD_SIZE/2+i*GRID_SIZE, WORLD_SIZE/2,0.1);
    line(-WORLD_SIZE/2,-WORLD_SIZE/2+i*GRID_SIZE, 0.1,WORLD_SIZE/2,-WORLD_SIZE/2+i*GRID_SIZE,0.1);
  }

}


function keyPressed() {
  if (key == " ") {
    if (jump_toggle == false) {
      jump_toggle = true;
      t0 = millis();
    }
  }

  if (key == 'w') {
    forward = true;
  }
  if (key == 's') {
    back = true;
  }
  if (key == 'a') {
    left = true;
  }
  if (key == 'd') {
    right = true;
  }


  if (key == '1') {
    if (firsttoggle == false) {
      firsttoggle = true;
      thirdtoggle = false;
    } else {
      firsttoggle = false;
      thirdtoggle = false;
    }
  }
  if (key == '3') {
    if (thirdtoggle == false) {
      thirdtoggle = true;
      firsttoggle = false;
    } else {
      thirdtoggle = false;
      firsttoggle = false;
    }
  }
}

function keyReleased() {
  if (key == 'w') {
    forward = false;
  }
  if (key == 's') {
    back = false;
  }
  if (key == 'a') {
    left = false;
  }
  if (key == 'd') {
    right = false;
  }
}


function handleUserInput() {

  let s = 1; // moving speed
  let g = -0.01; //gravity
  let v = 1; //initial speed
  let t; //time passed

  if (forward == true) {
      cam_x1 += s * (cam_dx1);
      cam_y1 += s * (cam_dy1);
  }
  if (back == true) {
    cam_x1 -= s * (cam_dx1);
    cam_y1 -= s * (cam_dy1);
  }
  if (left == true) {
    cam_x1 += s * (cam_dy1);
    cam_y1 -= s * (cam_dx1);
  }
  if (right == true) {
    cam_x1 -= s * (cam_dy1);
    cam_y1 += s * (cam_dx1);
  }

  if (jump_toggle == true) {
    t = (millis() - t0) / 3;
    cam_z1 = 30 + v * t + (1 / 2) * g * sq(t);

    if (cam_z1 <= 30) {
      cam_z1 = 30;
      jump_toggle = false;
    }
  }
  updateCamCenter();
}

function updateCamCenter() {
  cam_dx1 = cos(pan)*cos(tilt);
  cam_dy1 = sin(pan)*cos(tilt);
  cam_dz1 = sin(tilt);

  // compute scene center position
  cam_cx1 = cam_x1 + cam_dx1;
  cam_cy1 = cam_y1 + cam_dy1;
  cam_cz1 = cam_z1 + cam_dz1;
}
