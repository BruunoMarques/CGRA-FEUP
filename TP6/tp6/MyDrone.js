/**
 * MyQuad
 * @constructor
 */
 function MyDrone(scene) {
 	CGFobject.call(this,scene);

	this.edge = new MyCylinder(this.scene);
	this.sphere = new MySemiSphere(this.scene, 24,16);
	this.legs = new MyDroneLegs(this.scene);
	this.rotors = new MyRotor(this.scene);
	
 	this.Rot = 0;
 	this.Height = 0;
 	this.MotionX = 0;
 	this.MotionZ = 0;
 	this.spinF = 0;
 	this.spinB = 0;
 	this.spinR = 0;
 	this.spinL = 0;
	this.lastTime = 0;
	this.RotSpeed = 0;
	this.Acc = 0;


 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;


	
 MyDrone.prototype.display = function(){


	this.scene.pushMatrix();
		this.scene.translate(0,0,-1.5);
		this.scene.edge.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.edge.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.scale(0.5,0.5,0.5);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.sphere.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.4,-0.3);
		this.scene.scale(0.6,0.6,0.6);
		this.legs.display();
	this.scene.popMatrix();


//rotors
	this.scene.pushMatrix();
		this.scene.translate(1.5,0.15,0);
		this.scene.rotate(-this.spinL,0,1,0);
		this.rotors.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5,0.15,0);
		this.scene.rotate(-this.spinR,0,1,0);
		this.rotors.display();
	this.scene.popMatrix();

/////Oposites
	this.scene.pushMatrix();
		this.scene.translate(0,0.15,1.5);
		this.scene.rotate(this.spinF,0,1,0);
		this.rotors.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.15,-1.5);
		this.scene.rotate(this.spinB,0,1,0);
		this.rotors.display();
	this.scene.popMatrix();

		

 };

 MyDrone.prototype.update = function(currTime){

	var diff = currTime - this.lastTime;


 	if (this.lastTime == 0) {
	this.lastTime = currTime;
	}
	
	else if (this.RotSpeed == 0){

		diff = currTime - this.lastTime;
		this.spinL += (Math.PI*2) *(diff/1000);
		this.spinF += (Math.PI*2)*(diff/1000);
		this.spinR += (Math.PI*2) *(diff/1000);
		this.spinB += (Math.PI*2) *(diff/1000);
		this.lastTime = currTime;	
	}
	else if (this.RotSpeed == 1){
		diff = currTime - this.lastTime;
		this.spinL += ((Math.PI*2)*10) *(diff/1000);
		this.spinF += (72*degToRad)*(diff/1000);
		this.spinR += ((Math.PI*2)*10) *(diff/1000);
		this.spinB += (72*degToRad)*(diff/1000);
		this.lastTime = currTime;
		this.Acc += diff;	
	}
	else if (this.RotSpeed == 2){
		diff = currTime - this.lastTime;
		this.spinL += (Math.PI*2)  *(diff/1000);
		this.spinF += (72*degToRad)*(diff/1000);
		this.spinR += (Math.PI*2)  *(diff/1000);
		this.spinB += ((Math.PI*2)*10)*(diff/1000);
		this.lastTime = currTime;
		this.Acc += diff;	
	} 
	else if () 200){
		this.RotSpeed = 0;
	}
	
	
/*	else if (this.Acc >= 1){
		this.RotSpeed == 0;
		console.log(this.Acc);
	}
	
*/
 };

 MyDrone.prototype.initBuffers = function() {
 	this.vertices = [];
 	this.indices = [];

 	this.primitiveType = this.scene.gl.TRIANGLES;



 	this.rotateLeft = function (speed){
	this.Rot -= speed;
 	};

 	this.rotateRight = function (speed){
	this.Rot += speed;
 	};
	
	this.addHeight = function (speed){
	this.Height += speed*0.1;
	};

	this.redHeight = function (speed){
	this.Height -= speed *0.1;
	};

	this.addMotion = function (speed){
		this.MotionX -= Math.sin(this.Rot*degToRad) *(speed*0.1); 
		this.MotionZ -= Math.cos(this.Rot*degToRad)*(speed*0.1); 
	};


	this.redMotion = function (speed){
		this.MotionX += Math.sin(this.Rot *degToRad) *(speed*0.1); 
		this.MotionZ += Math.cos(this.Rot*degToRad)*(speed*0.1); 
	};
	
	this.yaw = function (){
		this.RotSpeed = 1;
	};

	this.pitch = function (){
		this.RotSpeed = 2;
	};
 	this.initGLBuffers();
 };