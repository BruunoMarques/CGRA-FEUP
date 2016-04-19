/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
	this.vertices =[];
	this.indices = [];
	this.normals = [];

var angle = 2 * Math.PI / (this.slices);
	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i < this.slices; i++){
		this.vertices.push(Math.cos(i * angle), Math.sin(i * angle), j / this.stacks);
		this.vertices.push(Math.cos((i + 1) * angle), Math.sin((i + 1) * angle), j / this.stacks);
		}
	}

	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i < this.slices; i++){
		this.normals.push(Math.cos(i * angle + (angle/2)), Math.sin(i * angle + (angle/2)),0);
		this.normals.push(Math.cos(i * angle + (angle/2)), Math.sin(i * angle + (angle/2)),0);	
	}
	}
	for (var j = 0; j < this.stacks; j++){
		for (var i = 0; i < this.slices; i++){
		var avanco = j*this.slices;
		var nextslice = (j+1)*this.slices;
		this.indices.push((avanco + i) * 2, (avanco + i) * 2 + 1, (nextslice + i) * 2 + 1);
		this.indices.push((avanco + i) * 2, (nextslice + i) * 2 + 1, (nextslice + i) * 2);
		}
	} 



 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 }
