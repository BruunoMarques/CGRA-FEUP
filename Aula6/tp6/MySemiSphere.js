 function MySemiSphere(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 

 MySemiSphere.prototype = Object.create(CGFobject.prototype);
 MySemiSphere.prototype.constructor = MySemiSphere;

 MySemiSphere.prototype.initBuffers = function() {
	
 	this.vertices = [];
 	this.indices = [];
	this.normals = [];
	this.texCoords = [];


var angle = 2 * Math.PI / (this.slices);
var azangle = (Math.PI/2)/this.stacks;

	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i <= this.slices; i++){
		this.vertices.push(Math.cos(i * angle)*Math.sin(j*azangle), Math.sin(j*azangle)*Math.sin(i*angle), -Math.cos(j*azangle));
		}
	}

	for (var j = 0; j< this.stacks + 1; j++){
		for (var i = 0; i <= this.slices; i++){
		this.normals.push(Math.cos(i * angle)*Math.sin(j*azangle), Math.sin(j*azangle)*Math.sin(i*angle),-Math.cos(j*azangle));
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

	


	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };