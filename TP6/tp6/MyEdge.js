/**
 * MyEdge
 * @constructor
 */
 function MyEdge(scene) {
 	CGFobject.call(this,scene);

	this.cylinder = new MyCylinder(this.scene, 12,2);
	this.cylinder.initBuffers();


	this.myCircle = new MyCircle(this.scene,20);
 	this.myCircle.initBuffers();

 };

 MyEdge.prototype = Object.create(CGFobject.prototype);
 MyEdge.prototype.constructor = MyEdge;


	
 MyEdge.prototype.display = function(){

this.scene.pushMatrix();
	this.scene.translate(0,0.1,0);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.scene.scale(0.2,0.2,0.2);   
	 
	this.scene.pushMatrix();
		this.scene.translate(0,0,1);
    	this.myCircle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
    	this.myCircle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.cylinder.display();
	this.scene.popMatrix();

this.scene.popMatrix();


	this.scene.pushMatrix();
		this.scene.scale (0.05,0.05,3);
		this.cylinder.display();
	this.scene.popMatrix();

this.scene.pushMatrix();
	this.scene.translate(0,0.1,3);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.scene.scale(0.2,0.2,0.2);   
	 
	this.scene.pushMatrix();
		this.scene.translate(0,0,1);
    	this.myCircle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
    	this.myCircle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.cylinder.display();
	this.scene.popMatrix();

this.scene.popMatrix();



 };

