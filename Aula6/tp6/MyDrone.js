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
	this.hook = new MyHook(this.scene);
	
	this.DroneYellowAppearance = new CGFappearance(this.scene); 
	this.DroneYellowAppearance.loadTexture (this.scene.droneAppearances[3]);
	
	this.DroneBlueAppearance = new CGFappearance(this.scene); 
	this.DroneBlueAppearance.loadTexture(this.scene.droneAppearances[1]);

	this.DroneRedAppearance = new CGFappearance(this.scene); 
	this.DroneRedAppearance.loadTexture (this.scene.droneAppearances[2]);

	this.DroneYellow2Appearance = new CGFappearance(this.scene); 
	this.DroneYellow2Appearance.loadTexture(this.scene.droneAppearances[0]);

	this.DroneBlue2Appearance = new CGFappearance(this.scene); 
	this.DroneBlue2Appearance.loadTexture (this.scene.droneAppearances[4]);

	this.DroneRed2Appearance = new CGFappearance(this.scene); 
	this.DroneRed2Appearance.loadTexture (this.scene.droneAppearances[5]);

 	this.Rot = 0;
 	this.Height = 4;
 	this.MotionX = 7.5;
 	this.MotionZ = 8;
 	this.spinF = 0;
 	this.spinB = 0;
 	this.spinR = 0;
 	this.spinL = 0;
	this.lastTime = 0;
	this.RotSpeed = 0;
	this.inclination = 0;
	this.keyUp = 0;
	this.keyDown = 0;
	this.keyLeft = 0;
	this.keyRight = 0;
	this.keyForward = 0;
	this.keyBack = 0;
	this.allkeys = 0;
	
	this.hookpositions = [ this.MotionX, this.Height+this.hook.strech, this.MotionZ ];

 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;


	
 MyDrone.prototype.display = function(){

 	switch (this.scene.currDroneAppearance){
 		case 'Yellow':
 		this.DroneYellow2Appearance.apply();
 		break;

 		case 'Blue':
 		this.DroneBlue2Appearance.apply();
 		break;

 		case 'Red':
 		this.DroneRed2Appearance.apply();
 		break;

 		default:
 		this.DroneRed2Appearance.apply();
 	}


	this.scene.pushMatrix();
		this.scene.scale(0.5,0.5,0.5);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.sphere.display();
	this.scene.popMatrix();


	switch (this.scene.currDroneAppearance){
 		case 'Yellow':
 		this.DroneYellowAppearance.apply();
 		break;

 		case 'Blue':
 		this.DroneBlueAppearance.apply();
 		break;

 		case 'Red':
 		this.DroneRedAppearance.apply();
 		break;

 		default:
 		this.DroneRedAppearance.apply();
 	}

	
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
		this.scene.translate(0,-0.4,-0.3);
		this.scene.scale(0.6,0.6,0.6);
		this.legs.display();
	this.scene.popMatrix();



//rotors
	this.scene.pushMatrix();
		this.scene.translate(1.5,0.15,0);
		this.scene.rotate(-this.spinL* this.scene.scaling_factor,0,1,0);
		this.rotors.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5,0.15,0);
		this.scene.rotate(-this.spinR* this.scene.scaling_factor,0,1,0);
		this.rotors.display();
	this.scene.popMatrix();

/////Oposites
	this.scene.pushMatrix();
		this.scene.translate(0,0.15,1.5);
		this.scene.rotate(this.spinF * this.scene.scaling_factor,0,1,0);
		this.rotors.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.15,-1.5);
		this.scene.rotate(this.spinB* this.scene.scaling_factor,0,1,0);
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

	else if (this.RotSpeed == 3){
		diff = currTime - this.lastTime;
		this.spinL += (Math.PI*2)  *(diff/1000);
		this.spinB += (72*degToRad)*(diff/1000);
		this.spinR += (Math.PI*2)  *(diff/1000);
		this.spinF += ((Math.PI*2)*10)*(diff/1000);
		this.lastTime = currTime;	
	}

	else if (this.RotSpeed == 2){
		diff = currTime - this.lastTime;
		this.spinL += ((Math.PI*2)*10) *(diff/1000);
		this.spinF += (72*degToRad)*(diff/1000);
		this.spinR += ((Math.PI*2)*10) *(diff/1000);
		this.spinB += (72*degToRad)*(diff/1000);
		this.lastTime = currTime;	
	}

	else if (this.RotSpeed == 1){
		diff = currTime - this.lastTime;
		this.spinL += (Math.PI*2)  *(diff/1000);
		this.spinF += (72*degToRad)*(diff/1000);
		this.spinR += (Math.PI*2)  *(diff/1000);
		this.spinB += ((Math.PI*2)*10)*(diff/1000);
		this.lastTime = currTime;
	} 

		if (this.inclination > 0 && this.allkeys == 0){
			this.inclination -= 1*degToRad * (diff/10);
		}

		if (this.inclination < 0 && this.allkeys == 0){
			this.inclination += 1*degToRad* (diff/10);
		}	
		
			
	if (this.keyForward == 1){
		this.addMotion(this.scene.speed);
		this.tiltForward();
		this.yaw();
	}

	if (this.keyBack == 1){
		this.redMotion(this.scene.speed);
		this.tiltBack();
		this.yawB();
	}

	if (this.keyLeft == 1){
		this.rotateLeft(this.scene.speed);
		this.pitch();
	}	

	if (this.keyRight == 1){
		this.rotateRight(this.scene.speed);
		this.pitch();
	}	
	if (this.keyUp == 1){
		this.addHeight(this.scene.speed);
	}

	if (this.keyDown == 1){
		this.redHeight(this.scene.speed);
	}

	this.hookpositions[0] =this.MotionX;
	this.hookpositions[1] = this.Height - this.scene.hook.strech;
	this.hookpositions[2] = this.MotionZ ;
	this.scene.box.checkHook();
	this.scene.box.checkPlat();

 };


	MyDrone.prototype.rotateLeft = function (speed){
	this.Rot -= speed;
 	};

 	MyDrone.prototype.rotateRight = function (speed){
	this.Rot += speed;
 	};
	
	MyDrone.prototype.addHeight = function (speed){
	this.Height += speed*0.1;
	};

	MyDrone.prototype.redHeight = function (speed){
	this.Height -= speed *0.1;
	};

	MyDrone.prototype.addMotion = function (speed){
		this.MotionX -= Math.sin(this.Rot*degToRad) *(speed*0.1); 
		this.MotionZ -= Math.cos(this.Rot*degToRad)*(speed*0.1); 
	};


	MyDrone.prototype.redMotion = function (speed){
		this.MotionX += Math.sin(this.Rot *degToRad) *(speed*0.1); 
		this.MotionZ += Math.cos(this.Rot*degToRad)*(speed*0.1); 
	};

	MyDrone.prototype.tiltForward = function(){
		if (this.inclination < Math.PI/6){
			this.inclination += 5 *degToRad;
		}	
	};

	MyDrone.prototype.tiltBack = function(){
		if (this.inclination > -Math.PI/6){
			this.inclination -= 5 *degToRad;
		}	
	};

	MyDrone.prototype.yawB = function (){
		this.RotSpeed = 3;
	};

	MyDrone.prototype.yaw = function (){
		this.RotSpeed = 1;
	};

	MyDrone.prototype.pitch = function (){
		this.RotSpeed = 2;
	};

	MyDrone.prototype.ResetVars = function(){
	this.keyUp = 0;
	this.keyDown = 0;
	this.keyLeft = 0;
	this.keyRight = 0;
	this.keyForward = 0;
	this.keyBack = 0;
	this.allkeys = 0;

	};


	MyDrone.prototype.initBuffers = function() {
 	this.vertices = [];
 	this.indices = [];

 	this.primitiveType = this.scene.gl.TRIANGLES;

 	this.initGLBuffers();
 };

 