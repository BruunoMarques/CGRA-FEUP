/**
 * MyUnitCubeQuad
 * @constructor
 */
 function MyBox(scene, minS, maxS, minT, maxT) {
 	CGFobject.call(this, scene);

 	this.quad = new MyQuad(this.scene,minS, maxS, minT, maxT);

 	this.posx=12;
 	this.posy=4.2;
 	this.posz=8;
 	this.picked = 0;
 	this.plat = 0;
 	this.backuprot = 0;
 };

 MyBox.prototype = Object.create(CGFobject.prototype);
 MyBox.prototype.constructor = MyBox;

 MyBox.prototype.display = function() {
 	// front face

 
  if (this.picked == 1 ){
   this.backuprot = this.scene.drone.Rot *degToRad+Math.PI;
  }
 

 	this.scene.pushMatrix();
    this.scene.translate(this.posx,this.posy,this.posz);
    if (this.picked == 1 && this.plat ==0){
      this.scene.rotate(this.scene.drone.Rot *degToRad+Math.PI,0,1,0);
    }
    else {
      this.scene.rotate(this.backuprot,0,1,0);
    }
   
   

 	this.scene.pushMatrix();
 	this.scene.translate(0, 0, 0.5);
 	this.quad.display();
 	this.scene.popMatrix();

 	// back face
 	this.scene.pushMatrix();
 	this.scene.rotate(180 * degToRad, 1, 0, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.quad.display();
 	this.scene.popMatrix();

 	// top face
 	this.scene.pushMatrix();
 	this.scene.rotate(-90 * degToRad, 1, 0, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.quad.display();
 	this.scene.popMatrix();

 	// back face
 	this.scene.pushMatrix();
 	this.scene.rotate(90 * degToRad, 1, 0, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.quad.display();
 	this.scene.popMatrix();

 	// right face
 	this.scene.pushMatrix();
 	this.scene.rotate(-90 * degToRad, 0, 1, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.quad.display();
 	this.scene.popMatrix();

 	// left face
 	this.scene.pushMatrix();
 	this.scene.rotate(90 * degToRad, 0, 1, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.quad.display();
 	this.scene.popMatrix();
    
   
 	this.scene.popMatrix();
 };



 MyBox.prototype.checkHook = function() {
   if ( Math.abs(this.posx - this.scene.drone.hookpositions[0])  <= 0.5 
   && Math.abs(this.posy - this.scene.drone.hookpositions[1])  <= 0.5 
   && Math.abs(this.posz - this.scene.drone.hookpositions[2])  <= 0.5
   && this.plat != 1 ){
      this.picked = 1;
      this.posx = this.scene.drone.hookpositions[0];
      this.posy = this.scene.drone.hookpositions[1];
      this.posz = this.scene.drone.hookpositions[2];
   }
 }


MyBox.prototype.checkPlat = function(){
  if ( Math.abs(this.posx - this.scene.platform.platposx)  <= 1 
   && (this.posy-this.scene.platform.platposy)  <= 0.6  && (this.posy-this.scene.platform.platposy) > 0
   && Math.abs(this.posz - this.scene.platform.platposz)  <= 1){
     this.plat = 1;
     this.picked = 0;
        }
};