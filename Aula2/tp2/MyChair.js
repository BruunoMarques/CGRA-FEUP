/**
 * MyTable
 * @constructor
 */
 function MyChair(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);;
 	this.myUnitCubeQuad.initBuffers();

	this.materialChair = new CGFappearance(this.scene);
	this.materialChair.setAmbient(0.32, 0.18, 0, 1);
	this.materialChair.setDiffuse(0.32, 0.18, 0, 1);
	this.materialChair.setSpecular(0.7, 0.1, 0.1,1);
	this.materialChair.setShininess(100);
	
 };

 MyChair.prototype = Object.create(CGFobject.prototype);
 MyChair.prototype.constructor = MyChair;

 MyChair.prototype.display = function() {

	//legs
 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(2, 1, -1);
 	this.scene.scale(0.3, 2.0, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(4, 1, -1);
 	this.scene.scale(0.3, 2.0, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(2, 1, 1);
 	this.scene.scale(0.3, 2.0, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(4, 1, 1);
 	this.scene.scale(0.3, 2.0, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
	
	//backrest
 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(2, 3, 1);
 	this.scene.scale(0.3, 2.0, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(2, 3, -1);
 	this.scene.scale(0.3, 2.0, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(2, 3.5, 0);
 	this.scene.scale(0.3, 1, 3);
    this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top

 	this.scene.pushMatrix();
 	this.materialChair.apply();
 	this.scene.translate(3, 2, 0);
 	this.scene.scale(2.5, 0.3, 2.5);
    this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 
 }
