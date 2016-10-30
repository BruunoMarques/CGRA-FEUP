/**
 * MyTable
 * @constructor
 */
 function MyHook(scene) {
 	CGFobject.call(this, scene);

 	this.cylinder3 = new MyCylinder(this.scene, 3,2);
	this.cylinder3.initBuffers();

	this.cylinder = new MyCylinder(this.scene, 12,2);
	this.cylinder.initBuffers();

	this.sphere = new MySemiSphere(this.scene,12,8);
 	this.sphere.initBuffers();

	this.hookAppearance = new CGFappearance(this.scene);
	this.hookAppearance.setDiffuse(0,0,0,0);
	this.hookAppearance.setSpecular(0,0,0,0);
	this.hookAppearance.setShininess(5);
  
	this.coordAppearance = new CGFappearance(this.scene);
	this.coordAppearance.setDiffuse(0.862745,0.862745, 0.862745,1);
	this.coordAppearance.setSpecular(0.862745,0.862745, 0.862745,1);
	this.coordAppearance.setShininess(50);
	
	
	this.strech =0.5;
	
	
	this.initBuffers();
 };

 MyHook.prototype = Object.create(CGFobject.prototype);
 MyHook.prototype.constructor = MyTable;

 MyHook.prototype.display = function() {

	this.scene.pushMatrix();
 		this.scene.scale(0.1,this.strech,0.1);
 		this.scene.rotate(Math.PI/2,1,0,0);
 		this.coordAppearance.apply();
 		this.cylinder3.display();
 	this.scene.popMatrix();
	
	this.hookAppearance.apply();
	
	this.scene.pushMatrix();
 		this.scene.translate(0,-this.strech,0);
 		this.scene.scale(0.2,0.2,0.2);
 		this.scene.rotate(Math.PI/2,1,0,0);
 		this.sphere.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 		this.scene.translate(0,-this.strech,0);
 		this.scene.scale(0.2,0.1,0.2);
 		this.scene.rotate(Math.PI/2,1,0,0);
 		this.cylinder.display();
 	this.scene.popMatrix();
 
 }
