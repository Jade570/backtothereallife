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

    this.leftarm=createVector(this.lax,this.lay,this.laz);
    this.leftforearm=createVector(this.lfax, this.lfay, this.lfaz);
    this.rightarm=createVector(this.rax, this.ray, this.raz);
    this.rightforearm=createVector(this.rfax, this.rfay, this.rfaz);
    this.leftleg=createVector(this.llx, this.lly, this.llz);
    this.leftthigh=createVector(this.ltx,this.lty,this.ltz);
    this.rightleg=createVector(this.rlx,this.rly,this.rlz);
    this.rightthigh=createVector(this.rtx,this.rty,this.rtz);

    //tokens
    this.leftleg={
      up: false,
      down: false
    };
    this.rightleg={
      up: false,
      down: false
    };
    this.leftarm={
      up:false,
      down: false,
      left: false,
      right:false
    }
    this.rightarm={
      up:false,
      down: false,
      left: false,
      right:false
    }
  }

  //rendering part
  limb (position, limbtype) { //limbtype: arm, forearm, thigh, leg
    push();
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
          break;

          case 2:
            //sphere(this.size*28, 12, 12);
            push();
            rotateZ(HALF_PI);
            cylinder(this.size*15,this.size*35);
            pop();
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
          break;

          case 2:
          //  sphere(this.size*40, 12, 12);
          push();
          rotateZ(HALF_PI);
          cylinder(this.size*20,this.size*35);
          pop();
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
    pop();
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
      translate(0,0,95*this.size);
      this.limb("left", "forearm");
      pop();

      push();
      translate(95*this.size,0,0);
      this.limb("right", "arm");
      translate(0,0,95*this.size);
      this.limb("right", "forearm");
      pop();

      push();
      translate(-40*this.size,0,170*this.size);
      this.limb("left", "thigh");
      translate(0,0,85*this.size);
      this.limb("left", "leg");
      pop();

      push();
      translate(40*this.size,0,170*this.size);
      this.limb("right", "thigh");
      translate(0,0,85*this.size);
      this.limb("right", "leg");
      pop();
    pop();
      break;

      case 1:
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
        translate(0,0,95*this.size);
        this.limb("left", "forearm");
        pop();

        push();
        translate(100*this.size,0,0);
        this.limb("right", "arm");
        translate(0,0,95*this.size);
        this.limb("right", "forearm");
        pop();

        push();
        translate(-40*this.size,0,170*this.size);
        this.limb("left", "thigh");
        translate(0,0,85*this.size);
        this.limb("left", "leg");
        pop();

        push();
        translate(40*this.size,0,170*this.size);
        this.limb("right", "thigh");
        translate(0,0,85*this.size);
        this.limb("right", "leg");
        pop();
      pop();
      break;
    }
  }

  //movement part
  leftarmleft(){ //stretch arm left

  }
  leftarmright(){ //go back

  }
  rightarmright(){ //stretch arm right

  }
  rightarmleft(){ //go back

  }

}
