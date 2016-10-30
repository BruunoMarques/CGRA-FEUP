/**
 * MyDroneLegs
 * @constructor
 */
 function MyDroneLegs(scene) {
 	CGFobject.call(this,scene);

	this.semicylinder = new MySemiCylinder(this.scene, 20,2);
	this.semicylinder.initBuffers();

	this.base = new MyUnitCubeQuad(this.scene);
 	this.base.initBuffers();
}

 MyDroneLegs.prototype = Object.create(CGFobject.prototype);
 MyDroneLegs.prototype.constructor = MyDroneLegs;


	
 MyDroneLegs.prototype.display = function(){
	

	this.scene.pushMatrix();
		this.scene.scale(0.8,0.8,0.2);
		this.semicylinder.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.8);
		this.scene.scale(0.8,0.8,0.2);
		this.semicylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.8,0,0.5);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(2.5,0.07,0.07);
		this.base.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.8,0,0.5);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(2.5,0.07,0.07);
		this.base.display();
	this.scene.popMatrix();
 };

