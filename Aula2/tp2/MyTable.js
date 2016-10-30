/**
 * MyTable
 * @constructor
 */
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);;
 	this.myUnitCubeQuad.initBuffers();

 	this.materialTampo = new CGFappearance(this.scene);
	this.materialTampo.setAmbient(0.32, 0.18, 0, 1);
	this.materialTampo.setDiffuse(0.32, 0.18, 0, 1);
	this.materialTampo.setSpecular(0.7, 0.1, 0.1,1);
	this.materialTampo.setShininess(100);

	this.materialPerna = new CGFappearance(this.scene);
	this.materialPerna.setAmbient(0.75, 0.75, 0.75, 1);
	this.materialPerna.setDiffuse(0.75, 0.75, 0.75, 1);
	this.materialPerna.setSpecular(0.5, 0.5, 0.5, 0.5);
	this.materialPerna.setShininess(120);
	
 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {
 	// legs
 	this.scene.pushMatrix();
 	this.materialPerna.apply();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialPerna.apply();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialPerna.apply();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.materialPerna.apply();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top

 	this.scene.pushMatrix();
 	this.materialTampo.apply();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
    this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 
 }
