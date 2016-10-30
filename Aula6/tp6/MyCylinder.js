/**
 * MyPrism
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
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
	this.texCoords = [];


	var angle = 2 * Math.PI / (this.slices);
	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i <= this.slices; i++){
		this.vertices.push(Math.cos(i * angle), Math.sin(i * angle), j / this.stacks);
		}
	}

	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i <= this.slices; i++){
		this.normals.push(Math.cos(i * angle), Math.sin(i * angle),0);
		}
	}


	for (var j = 0; j < this.stacks; j++){
		for (var i = 0; i < this.slices; i++){
			var avanco = j*(this.slices+1);
			var nextslice = (j+1)*(this.slices+1);
			this.indices.push(avanco+i, avanco +i+1, nextslice+i);
			this.indices.push(nextslice+i, avanco+i+1, nextslice+i+1);
		}
	}
	
	for (var j = 0; j<= this.stacks; j++){
		for (var i = 0; i <= this.slices; i++){
			this.texCoords.push((this.slices - i)/this.slices, j/this.stacks);
		}
	}



	console.log(this.vertices.length);
	console.log(this.indices.length);
	console.log(this.normals.length);

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 }
