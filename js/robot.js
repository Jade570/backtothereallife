class Robot{
  constructor(size, type,color,xaxis,yaxis, zaxis, xrot, yrot, zrot){
    colorMode(HSB,360,100,100);
    this.size = size;
    this.type=type;
    this.color=color;
    this.xaxis=xaxis;
    this.yaxis=yaxis;
    this.zaxis=zaxis;
    this.xrot=xrot;
    this.yrot=yrot;
    this.zrot=zrot;

    this.lax=0, this.lay=0, this.laz=0;
    this.lfax=HALF_PI/3, this.lfay=0, this.lfaz=0;
    this.rax=0, this.ray=0, this.raz=0;
    this.rfax=HALF_PI/3, this.rfay=0, this.rfaz=0;
    this.ltx=0, this.lty=0, this.ltz=0;
    this.llx=-(HALF_PI/4), this.lly=0, this.llz=0;
    this.rtx=0, this.rty=0, this.rtz=0;
    this.rlx=-(HALF_PI/4), this.rly=0, this.rlz=0;

    //tokens
    /*
      from, to tokens:
      from | to
      0     0   : original position
      0     1   : original -> target
      1     0   : target -> original
      1     1   : target position

      x: forward/backward direction
      y: side direction

      usage:
      x[from,to]
      y[from,to]
    */

    this.leftleg={
      x:{from:false, to:false},
      state: "static"
    };
    this.rightleg={
      x:{from:false, to:false},
      state: "static"
    };
    this.leftarm={
      x:{from:false, to:false},
      y:{from:false, to:false},
      yto:false,
      state: "static"
    }
    this.rightarm={
      x:{from:false, to:false},
      y:{from:false, to:false},
      state: "static"
    }

    this.lal = 0;
    this.lar = 0;
    this.rar = 0;
    this.ral = 0;
    this.hu = 0;
    this.hd = 0;
    this.cu = 0;
    this.cd = 0;
    this.ld = 0;
    this.lu = 0;
    this.rlu = 0;
    this.rld = 0;
  }

  //rendering part
  limb (position, limbtype) { //limbtype: arm, forearm, thigh, leg
    //push();
    switch(limbtype){
      case "arm":
        switch(position){
          case "right":
            rotateX(this.rax);
            rotateY(this.ray);
            rotateZ(this.raz);
            noStroke();
          break;

          case "left":
            rotateX(this.lax);
            rotateY(this.lay);
            rotateZ(this.laz);
            noStroke();
          break;
        }
        push(); //joint
        colorMode(RGB);
        fill(128,128,128);
        switch(this.type){
          case 0:
            sphere(this.size*25, 12, 12);
          break;

          case 1:
            sphere(this.size*30, 12, 12);
          break;

          case 2:
            sphere(this.size*30, 12, 12);
          break;
        }
        pop();

        translate(0,0,this.size*50);
        fill(this.color);
        box(this.size*30,this.size*30,this.size*80);
      break;

      case "forearm":
        switch(position){
          case "right":
            rotateX(this.rfax);
            rotateY(this.rfay);
            rotateZ(this.rfaz);
            noStroke();
          break;

          case "left":
          rotateX(this.lfax);
          rotateY(this.lfay);
          rotateZ(this.lfaz);
          noStroke();
          break;
        }
        push(); //joint
        colorMode(RGB);
        fill(128,128,128);
        switch(this.type){
          case 0:
            sphere(this.size*25, 12, 12);
          break;

          case 1:
            push();
            rotateZ(HALF_PI);
            cylinder(this.size*15,this.size*35);
            pop();
          break;

          case 2:
            sphere(this.size*27, 12, 12);
          break;
        }
        pop();

        translate(0,0,this.size*50);
        fill(this.color);
        box(this.size*30,this.size*30,this.size*80);
      break;

      case "thigh":
        switch(position){
          case "right":
            rotateX(this.rtx);
            rotateY(this.rty);
            rotateZ(this.rtz);
            noStroke();
          break;

          case "left":
            rotateX(this.ltx);
            rotateY(this.lty);
            rotateZ(this.ltz);
            noStroke();
          break;
        }
        push(); //joint
        colorMode(RGB);
        fill(128,128,128);
        switch(this.type){
          case 0:
            sphere(this.size*27, 12, 12);
          break;

          case 1:
            sphere(this.size*30, 12, 12);
          break;

          case 2:
            sphere(this.size*30, 12, 12);
          break;
        }
        pop();

        translate(0,0,this.size*50);
        fill(this.color);
        box(this.size*50,this.size*50,this.size*80);
      break;

      case "leg":
        switch(position){
          case "right":
            rotateX(this.rlx);
            rotateY(this.rly);
            rotateZ(this.rlz);
            noStroke();
          break;

          case "left":
            rotateX(this.llx);
            rotateY(this.lly);
            rotateZ(this.llz);
            noStroke();
          break;
        }
        push(); //joint
        colorMode(RGB);
        fill(128,128,128);
        switch(this.type){
          case 0:
            sphere(this.size*27, 12, 12);
          break;

          case 1:
            push();
            rotateZ(HALF_PI);
            cylinder(this.size*20,this.size*35);
            pop();
          break;

          case 2:
            sphere(this.size*30, 12, 12);
          break;
        }
        pop();

        translate(0,0,this.size*50);
        fill(this.color);
        box(this.size*50,this.size*50,this.size*80);

        push();
        rotateX(HALF_PI/4);
        translate(0,0,50*this.size);
        box(this.size*70, this.size*120, this.size*30);
        pop();
      break;
    }
}
  head(){
    push();
    switch(this.type){
      case 0:
        noStroke();
        box(this.size*100,this.size*100,this.size*80);

        push();
        rotateX(HALF_PI);
        translate(0,-50*this.size, 0);
        fill(0,0,50);
        cylinder(this.size*2.5,this.size*50,12,1);
        translate(0,-30*this.size, 0);
        fill((hue(this.color)-132+360)%360, 90,100, 0.9);
        sphere(this.size*8, 8,8);
        pop();


        push();
        translate(0,-45*this.size,8*this.size);
        fill(0,0,0);
        specularMaterial(246,94,10,0.9);
        sphere(this.size*30,10,10);
        pop();
      break;

      case 1:
        noStroke();
        box(this.size*100,this.size*100,this.size*80);

        push();
        rotateX(HALF_PI);
        translate(0,-50*this.size, 0);
        pop();

        //eyes
        push();
        translate(0,-45*this.size,8*this.size);
        specularMaterial((hue(this.color)-132+360)%360, 100,100,0.9);
        fill((hue(this.color)-132+360)%360, 90,100, 0.9);
        sphere(this.size*30,10,10);
        pop();
      break;

      case 2: //destructoid
        noStroke();
        box(this.size*100,this.size*100,this.size*80);

        push(); //ears
        translate(-60*this.size,0,0);
        rotateZ(HALF_PI);
        cylinder(this.size*25,this.size*25,12,1);
        pop();
        push();
        translate(this.size*60,0,0);
        rotateZ(HALF_PI);
        cylinder(this.size*25,this.size*25,12,1);
        pop();

        push();   //T accessory
        colorMode(RGB);
        fill(255,255,255);
        translate(0,-50*this.size,-25*this.size);
        box(this.size*85,this.size*10,this.size*12);

          push();
          fill(0,0,0);
          translate(-35*this.size,-4*this.size,0);
          cylinder(3*this.size,3*this.size,12,1);
          translate(17.5*this.size,0,0);
          cylinder(3*this.size,3*this.size,12,1);
          translate(17.5*this.size,0,0);
          cylinder(3*this.size,3*this.size,12,1);
          translate(17.5*this.size,0,0);
          cylinder(3*this.size,3*this.size,12,1);
          translate(17.5*this.size,0,0);
          cylinder(3*this.size,3*this.size,12,1);
          pop();

        translate(0,0,15*this.size);
        box(12*this.size,10*this.size,40*this.size);

        push();
        fill(0,0,0);
        translate(0,-4*this.size,0);
        cylinder(3*this.size,3*this.size,12,1);
        translate(0,0,15*this.size);
        cylinder(3*this.size,3*this.size,12,1);
        pop();

        translate(0,0,8*this.size);

        push(); //eyes
        shininess(10);
          colorMode(HSB);
          //specularMaterial((hue(this.color)-132+360)%360, saturation(this.color), brightness(this.color),0.9);
          //fill((hue(this.color)-132+360)%360, saturation(this.color), brightness(this.color), 0.9);
          specularMaterial((hue(this.color)-132+360)%360, 100,100,0.9);
          fill((hue(this.color)-132+360)%360, 90,100, 0.9);
          push();
          translate(-27*this.size,0,0);
          sphere(15*this.size,12,12);
          pop();
          push();
          translate(27*this.size,0,0);
          sphere(15*this.size,12,12);
          pop();
        pop();

        translate(0,0,30*this.size);
        fill(255,255,255);
        box(62*this.size,10*this.size,17*this.size);
          push();
          fill(0,0,0);
          translate(-25*this.size,-1*this.size,0);
          box(4*this.size,10*this.size,14*this.size);
          translate(12.5*this.size,0,0);
          box(4*this.size,10*this.size,14*this.size);
          translate(12.5*this.size,0,0);
          box(4*this.size,10*this.size,14*this.size);
          translate(12.5*this.size,0,0);
          box(4*this.size,10*this.size,14*this.size);
          translate(12.5*this.size,0,0);
          box(4*this.size,10*this.size,14*this.size);
          pop();
        pop();
      break;
    }
    pop();
  }
  body(){
    push();
    switch(this.type){
      case 0:
      noStroke();
      box(150*this.size,150*this.size,200*this.size);
      break;

      case 1:
      noStroke();
      box(150*this.size,150*this.size,200*this.size);
      break;

      case 2:
        noStroke();
        box(150*this.size,150*this.size,200*this.size);
      break;
    }
    pop();
  }
  render(){
    push();

    colorMode(HSB);
    fill(this.color);
    translate(this.xaxis,this.yaxis,this.zaxis);
    rotateX(this.xrot);
    rotateY(this.yrot);
    rotateZ(this.zrot);

    switch(this.type){
      case 0:
      push();
      translate(0,0,-200*this.size);
      this.head();
      push();
      translate(0,0,140*this.size);
      this.body();
      pop();
      pop();

      translate(0,0,-130*this.size);
      push();
      translate(-95*this.size,0,0);
      this.limb("left", "arm");
      translate(0,0,55*this.size);
      this.limb("left", "forearm");
      pop();

      push();
      translate(95*this.size,0,0);
      this.limb("right", "arm");
      translate(0,0,55*this.size);
      this.limb("right", "forearm");
      pop();

      push();
      translate(-40*this.size,0,170*this.size);
      this.limb("left", "thigh");
      translate(0,0,40*this.size);
      this.limb("left", "leg");
      pop();

      push();
      translate(40*this.size,0,170*this.size);
      this.limb("right", "thigh");
      translate(0,0,40*this.size);
      this.limb("right", "leg");
      pop();
    pop();
      break;

      case 1:
        push();
        translate(0,0,-200*this.size);
        this.head();
        push();
        translate(0,0,140*this.size);
        this.body();
        pop();
        pop();

        translate(0,0,-130*this.size);
        push();
        translate(-100*this.size,0,0);
        this.limb("left", "arm");
        translate(0,0,50*this.size);
        this.limb("left", "forearm");
        pop();

        push();
        translate(100*this.size,0,0);
        this.limb("right", "arm");
        translate(0,0,50*this.size);
        this.limb("right", "forearm");
        pop();

        push();
        translate(-40*this.size,0,170*this.size);
        this.limb("left", "thigh");
        translate(0,0,50*this.size);
        this.limb("left", "leg");
        pop();

        push();
        translate(40*this.size,0,170*this.size);
        this.limb("right", "thigh");
        translate(0,0,50*this.size);
        this.limb("right", "leg");
        pop();
      pop();
      break;

      case 2: //destructoid
        push();
        translate(0,0,-200*this.size);
        this.head();
        push();
        translate(0,0,140*this.size);
        this.body();
        pop();
        pop();

        translate(0,0,-130*this.size);
        push();
        translate(-100*this.size,0,0);
        this.limb("left", "arm");
        translate(0,0,50*this.size);
        this.limb("left", "forearm");
        pop();

        push();
        translate(100*this.size,0,0);
        this.limb("right", "arm");
        translate(0,0,50*this.size);
        this.limb("right", "forearm");
        pop();

        push();
        translate(-40*this.size,0,170*this.size);
        this.limb("left", "thigh");
        translate(0,0,50*this.size);
        this.limb("left", "leg");
        pop();

        push();
        translate(40*this.size,0,170*this.size);
        this.limb("right", "thigh");
        translate(0,0,50*this.size);
        this.limb("right", "leg");
        pop();
      pop();
      break;
    }
  }

  //movement part
  leftarmleft(){ //stretch arm left
    if (this.leftarm.state == "setleft"){ //check key input
      this.leftarm.y.from = false;
      this.leftarm.y.to = true;
      this.lay-=radians(4);
      this.lfax -= (HALF_PI/3)/42.5;
      this.lal = 1;
      if(this.lay <= -radians(170)){ //stop movement
        this.leftarm.state = "static"; // change state
        this.leftarm.y.from = true;
        this.leftarm.y.to = true;
        this.lay = -radians(170);
        this.lfax = 0;
        this.lal = 0;
      }
    }
  }
  leftarmright(){ //go back
    if (this.leftarm.state == "resetleft"){ //check key input
      this.leftarm.y.from = true;
      this.leftarm.y.to = false;
      this.lay+=radians(4);
      this.lfax += (HALF_PI/3)/42.5;
      this.lar = 1;
      if(this.lay >= 0){ //stop movement
        this.leftarm.y.from = false;
        this.leftarm.y.to = false;
        this.leftarm.state = "static"; //change state
        this.lay = 0;
        this.lfax = HALF_PI/3;
        this.lar = 0;
      }
    }
  }
  rightarmright(){ //stretch arm right
    if (this.rightarm.state == "setright"){ //check key input
      this.rightarm.y.from = false;
      this.rightarm.y.to = true;
      this.ray+=radians(4);
      this.rfax -= (HALF_PI/3)/42.5;
      this.rar = 1;
      if(this.ray >= radians(170)){ //stop movement
        this.rightarm.state = "static"; // change state
        this.rightarm.y.from = true;
        this.rightarm.y.to = true;
        this.ray = radians(170);
        this.rfax = 0;
        this.rar = 0;
      }
    }
  }
  rightarmleft(){ //go back
    if (this.rightarm.state == "resetright"){ //check key input
      this.rightarm.y.from = true;
      this.rightarm.y.to = false;
      this.ray-=radians(4);
      this.rfax += (HALF_PI/3)/42.5;
      this.ral = 1;
      if(this.ray <= 0){ //stop movement
        this.rightarm.y.from = false;
        this.rightarm.y.to = false;
        this.rightarm.state = "static"; //change state
        this.ray = 0;
        this.rfax = HALF_PI/3;
        this.ral = 0;
      }
    }
  }
  hurrayup(){
    if (this.leftarm.state == "sethurray" && this.rightarm.state=="sethurray"){
      this.leftarm.x.from = false;
      this.leftarm.x.to=true;
      this.rightarm.x.from = false;
      this.rightarm.x.to=true;
      this.lax += radians(4);
      this.rax += radians(4);
      this.lfax -= (HALF_PI/3)/42.5;
      this.rfax -= (HALF_PI/3)/42.5;
      this.hu = 1;
      if(this.lax >= radians(170)){
        this.leftarm.state="static";
        this.rightarm.state="static";
        this.leftarm.x.from = true;
        this.leftarm.x.to = true;
        this.rightarm.x.from = true;
        this.rightarm.x.to = true;
        this.lax = radians(170);
        this.rax = radians(170);
        this.lfax = 0;
        this.rfax = 0;
        this.hu = 0;
      }
    }
  }
  hurraydown(){
    if (this.leftarm.state == "resethurray" && this.rightarm.state=="resethurray"){
      this.leftarm.x.from = true;
      this.leftarm.x.to = false;
      this.rightarm.x.from = true;
      this.rightarm.x.to = false;
      this.lax -= radians(4);
      this.rax -= radians(4);
      this.lfax += (HALF_PI/3)/42.5;
      this.rfax += (HALF_PI/3)/42.5;
      this.hd = 1;
      if(this.lax <= 0){
        this.leftarm.state="static";
        this.rightarm.state="static";
        this.leftarm.x.from = false;
        this.leftarm.x.to = false;
        this.rightarm.x.from = false;
        this.rightarm.x.to = false;
        this.lax = 0;
        this.rax = 0;
        this.lfax = HALF_PI/3;
        this.rfax = HALF_PI/3;
        this.hd = 0;
      }
    }
  }
  clapup(){
    if (this.leftarm.state == "setclap" && this.rightarm.state=="setclap"){
      this.leftarm.x.from = false;
      this.leftarm.x.to=true;
      this.rightarm.x.from = false;
      this.rightarm.x.to=true;
      this.lax += radians(2);
      this.rax += radians(2);
      this.lay += radians(0.25);
      this.ray -= radians(0.25);
      this.lfay += radians(1);
      this.rfay -= radians(1);
      this.cu = 1;

      if(this.lax >= radians(170/2)){
        this.leftarm.state="static";
        this.rightarm.state="static";
        this.leftarm.x.from = true;
        this.leftarm.x.to = true;
        this.rightarm.x.from = true;
        this.rightarm.x.to = true;
        this.lax = radians(170/2);
        this.rax = radians(170/2);
        this.cu = 0;
      }
    }
  }
  clapdown(){
    if (this.leftarm.state == "resetclap" && this.rightarm.state=="resetclap"){
      this.leftarm.x.from = true;
      this.leftarm.x.to=false;
      this.rightarm.x.from = true;
      this.rightarm.x.to = false;
      this.lax -= radians(2);
      this.rax -= radians(2);
      this.lay -= radians(0.25);
      this.ray += radians(0.25);
      this.lfay -= radians(1);
      this.rfay += radians(1);
      this.cd = 1;

      if(this.lax <= 0){
        this.leftarm.state="static";
        this.rightarm.state="static";
        this.leftarm.x.from = false;
        this.leftarm.x.to = false;
        this.rightarm.x.from = false;
        this.rightarm.x.to = false;
        this.lax = 0;
        this.rax = 0;
        this.cd = 0;
      }
    }
  }
  legsdown(){
    if (this.leftleg.state == "setlegs" && this.rightleg.state == "setlegs"){
      this.leftleg.x.from = false;
      this.leftleg.x.to = true;
      this.rightleg.x.from = false;
      this.rightleg.x.to = true;
      this.ltx += radians(1);
      this.rtx += radians(1);
      this.llx -= radians(1);
      this.rlx -= radians(1);
      this.zaxis += 0.5;
      this.yaxis += 1;
      this.ld = 1;

      if (this.ltx >= radians(170/4)){
        this.leftleg.state = "static";
        this.rightleg.state = "static";
        this.leftleg.x.from=true;
        this.leftleg.x.to = true;
        this.rightleg.x.from=true;
        this.rightleg.x.to = true;
        this.ltx = radians(170/4);
        this.rtx = radians(170/4);
        this.ld = 0;
      }
    }
  }
  legsup(){
    if (this.leftleg.state == "resetlegs" && this.rightleg.state == "resetlegs"){
      this.leftleg.x.from = true;
      this.leftleg.x.to = false;
      this.rightleg.x.from = true;
      this.rightleg.x.to = false;
      this.ltx -= radians(1);
      this.rtx -= radians(1);
      this.llx += radians(1);
      this.rlx += radians(1);
      this.zaxis -= 0.5;
      this.yaxis -= 1;
      this.lu = 1;

      if (this.ltx <= 0){
        this.leftleg.state = "static";
        this.rightleg.state = "static";
        this.leftleg.x.from=false;
        this.leftleg.x.to = false;
        this.rightleg.x.from=false;
        this.rightleg.x.to = false;
        this.ltx = 0;
        this.rtx = 0;
        this.lu = 0;
      }
    }
  }
  leftlegup(){
    if (this.leftleg.state == "setleft"){
      this.leftleg.x.from = false;
      this.leftleg.x.to = true;
      this.ltx += radians(4/2.5);
      this.llx -= radians(1);
      this.llu = 1;
      if (this.ltx >= radians(170/2.5)){
        this.leftleg.state = "static";
        this.leftleg.x.from = true;
        this.leftleg.x.to = true;
        this.ltx = radians(170/2.5);
        this.llu = 0;
      }
    }
  }
  leftlegdown(){
    if (this.leftleg.state == "resetleft"){
      this.leftleg.x.from = true;
      this.leftleg.x.to = false;
      this.ltx -= radians(4/2.5);
      this.llx += radians(1);
      this.lld = 1;
      if (this.ltx <= 0){
        this.leftleg.state = "static";
        this.leftleg.x.from = false;
        this.leftleg.x.to = false;
        this.ltx = 0;
        this.lld = 0;
      }
    }
  }
  rightlegup(){
    if (this.rightleg.state == "setright"){
      this.rightleg.x.from = false;
      this.rightleg.x.to = true;
      this.rtx += radians(4/2.5);
      this.rlx -= radians(1);
      this.rlu = 1;
      if (this.rtx >= radians(170/2.5)){
        this.rightleg.state = "static";
        this.rightleg.x.from = true;
        this.rightleg.x.to = true;
        this.rtx = radians(170/2.5);
        this.rlu = 0;
      }
    }

  }
  rightlegdown(){
    if (this.rightleg.state == "resetright"){
      this.rightleg.x.from = true;
      this.rightleg.x.to = false;
      this.rtx -= radians(4/2.5);
      this.rlx += radians(1);
      this.rld = 1;
      if (this.rtx <= 0){
        this.rightleg.state = "static";
        this.rightleg.x.from = false;
        this.rightleg.x.to = false;
        this.rtx = 0;
        this.rld = 0;
      }
    }
  }
  movements(){
    this.leftarmleft();
    this.leftarmright();
    this.rightarmright();
    this.rightarmleft();
    this.hurrayup();
    this.hurraydown();
    this.clapup();
    this.clapdown();
    this.legsdown();
    this.legsup();
    this.leftlegup();
    this.leftlegdown();
    this.rightlegup();
    this.rightlegdown();
  }


}

class Drone{
  constructor(size, color, xaxis,yaxis, zaxis, xrot, yrot, zrot){
    this.size = size;
    this.color = color;
    this.xaxis = xaxis;
    this.yaxis = yaxis;
    this.zaxis = zaxis;
    this.xrot = xrot;
    this.yrot = yrot;
    this.zrot = zrot;

    this.leftwing = 0;
    this.rightwing = 0;
  }

  render(){
    push();

    colorMode(HSB);
    fill(this.color);
    translate(this.xaxis,this.yaxis,this.zaxis);



    rotateX(this.xrot);
    rotateY(this.yrot);
    rotateZ(this.zrot);
    noStroke();
    sphere(40,12,12);

    push();
    translate(-75,0,0);
    rotateX(HALF_PI+this.leftwing);
    plane(50);
    pop();

    push();
    translate(75,0,0);
    rotateX(HALF_PI+this.rightwing);
    plane(50);
    pop();

    push();
    translate(0, -25, 0);
    fill(0,0,0);
    specularMaterial(0,0,0);
    sphere(20,12,12);
    pop();

    push();
    rotateZ(HALF_PI);
    fill(0,0,50);
    cylinder(1,150, 12,1);
    pop();

    pop();
  }

}
