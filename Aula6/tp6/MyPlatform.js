/**
 * MyUnitCubeQuad
 * @constructor
 */
 function MyPlatform(scene, minS, maxS, minT, maxT) {
 	CGFobject.call(this, scene);

 	this.quad = new MyQuad(this.scene,minS, maxS, minT, maxT);

 	this.platposx=12;
 	this.platposy=0.1;
 	this.platposz=12;
 	
 };

 MyPlatform.prototype = Object.create(CGFobject.prototype);
 MyPlatform.prototype.constructor = MyPlatform;

 MyPlatform.prototype.display = function() {
 	// front face

 

 	this.scene.pushMatrix();
 	
    this.scene.translate(this.platposx,this.platposy,this.platposz);
    this.scene.scale(2,0.2,2);
   

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

