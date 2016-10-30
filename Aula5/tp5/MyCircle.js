/**
 * MyCircle
 * @constructor
 */
 function MyCircle(scene, slices) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {


	this.vertices =[];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	
	var angle = 2 * Math.PI / (this.slices);
	this.vertices.push(0,0,0);

	for (var j = 0; j< this.slices + 1; j++){
		this.vertices.push(Math.cos(j*angle),Math.sin(j*angle),0);
		this.normals.push(1,0,0);
	}
	
	this.texCoords.push(0.5,0.5);
	
	for (var i = 0; i < this.slices;i++){
		this.indices.push(0,i,i+1);
		this.texCoords.push(0.5+Math.cos(i*(2*Math.PI)/this.slices)/2);
		this.texCoords.push(0.5-Math.sin(i*(2*Math.PI)/this.slices)/2);
	}
	this.indices.push(0, this.slices, 1);

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 }
