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

	var angle = 2*Math.PI / this.slices;
	var slinc = 1/this.slices;
	var stinc = 1/this.stacks;

	//---------------stacks------------------
	for (var i=0; i<=1; i+= 1/this.stacks){
		var r = Math.sqrt(1-(i*i));

		//---------------slices------------------
		for (var j=0; j<this.slices; j++){

			//---------------vertices------------------
			this.vertices.push(r*Math.cos(angle*j));
			this.vertices.push(r*Math.sin(angle*j));
			this.vertices.push(i);

			//---------------normals------------------
			this.normals.push(r*Math.cos(angle*j));
			this.normals.push(r*Math.sin(angle*j));
			this.normals.push(i);

		}

	}


	for (j = 0; j < this.stacks; j++) {
		for (i = 0; i < (this.slices - 1); i++) {

			//---------------indices------------------
			this.indices.push(this.slices*j+i);
			this.indices.push(this.slices*j+i+1);
			this.indices.push(this.slices*(j+1)+i);
			
			this.indices.push(this.slices*j+i+1);
			this.indices.push(this.slices*(j+1)+i+1);
			this.indices.push(this.slices*(j+1)+i); 		
		}

		this.indices.push(this.slices*j+i);
		this.indices.push(this.slices*j);
		this.indices.push(this.slices*(j+1)+i);

		this.indices.push(this.slices*j);
		this.indices.push(this.slices*j+i+1)
		this.indices.push(this.slices*(j+1)+i);
	}

	for (j = 0; j <= this.stacks; j++) {
		for (i = 0; i < this.slices; i++) {
			//---------------texCoords------------------
			this.texCoords.push(j/this.slices, i/this.stacks);
		}
	}
	
	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };