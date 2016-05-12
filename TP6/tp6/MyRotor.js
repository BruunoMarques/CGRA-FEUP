/**
 * MyRotor
 * @constructor
 */
 function MyRotor(scene) {
 	CGFobject.call(this,scene);

	this.cylinder = new MyCylinder(this.scene, 6,2);
	this.cylinder.initBuffers();


	this.mySphere = new MySemiSphere(this.scene,10,2);
 	this.mySphere.initBuffers();

 };

 MyRotor.prototype = Object.create(CGFobject.prototype);
 MyRotor.prototype.constructor = MyRotor;


	
 MyRotor.prototype.display = function(){


this.scene.pushMatrix();
	this.scene.translate(0,-0.05,0);
	this.scene.scale(0.17,0.17,0.17);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.mySphere.display();
this.scene.popMatrix();


this.scene.pushMatrix();
	this.scene.translate(-0.3,0,-0.075);
	this.scene.rotate(Math.PI/10,1,0,0);
	this.scene.scale(0.3,0.001,0.15);
	this.cylinder.display();
this.scene.popMatrix();

this.scene.pushMatrix();
	this.scene.translate(0.3,0,-0.075);
	this.scene.rotate(-Math.PI/10,1,0,0);
	this.scene.scale(0.3,0.001,0.15);
	this.cylinder.display();
this.scene.popMatrix();


 };

