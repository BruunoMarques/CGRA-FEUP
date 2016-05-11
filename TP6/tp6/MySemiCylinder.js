/**
 * MyPrism
 * @constructor
 */
 function MySemiCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MySemiCylinder.prototype = Object.create(CGFobject.prototype);
 MySemiCylinder.prototype.constructor = MySemiCylinder;

 MySemiCylinder.prototype.initBuffers = function() {
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


	var angle = Math.PI / (this.slices);
	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i < this.slices; i++){
		this.vertices.push(Math.cos(i * angle), Math.sin(i * angle), j / this.stacks);
		}
	}

	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i < this.slices; i++){
		this.normals.push(Math.cos(i * angle), Math.sin(i * angle),0);
	}
	}


		for (var j = 0; j < this.stacks; j++){
			for (var i = 0; i < this.slices; i++){
				var avanco = j*this.slices;
				var nextslice = (j+1)*this.slices;
				if (this.slices -1 == i){
				}
				else {
				this.indices.push(avanco+i, avanco +i+1, nextslice+i);
				this.indices.push(nextslice+i, avanco+i+1, nextslice+i+1);
				}
			}
		}
	

	console.log(this.vertices.length);
	console.log(this.indices.length);
	console.log(this.normals.length);

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 }
