let bot = [];
let col;
let titlefont;
let playbutton;

function preload(){
  titlefont = loadFont("assets/FasterOne.ttf");
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
  colorMode(HSB, 360, 100, 100);

  //play button
  playbutton = createButton('play');
  playbutton.position(windowWidth/2-75,windowHeight-200);
  playbutton.mousePressed(function(){
    window.location.replace("2/index.html");
  });


  col = color(10,100,30);

  for(let i = 0; i<10; i++){
    bot[i] = [];
    for(let j= 0; j<10; j++){
          bot[i][j] = new Robot(2,2,col,-750*i,850*j,0,0,0,0);
    }
  }
}

function draw(){
  colorMode(RGB, 255,255,255);
  lights();

  //orbitControl();
  background(0);

  push(); //title
  textAlign(RIGHT);
  rotateY(-HALF_PI*0.55);
  rotateZ(HALF_PI*0.13);
  translate(windowWidth*0.25,-windowHeight*0.18,0);
  fill(255);
  textFont(titlefont);
  textSize(0.118*windowWidth);
  text('Back To The Real Life', 0, 0);
  pop();

  rotateX(HALF_PI*0.9);
  rotateZ(-PI*0.75);
  rotateY(PI);

  colorMode(HSB, 360, 100, 100);

  translate(100, 0, 500);
  for(let i = 0; i<10; i++){
    for(let j= 0; j<10; j++){
          bot[i][j].render();
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}
