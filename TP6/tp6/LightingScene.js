var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;


function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {

	this.Luz1 = true;
	this.Luz2 = true;
	this.Luz3 = true;
	this.Luz4 = true;
	this.ClockOn = true;
	this.speed = 3;

	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();
	this.enableTextures(true);

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wall = new MyQuad(this,-0.5, 1.55, -0.5, 1.55); 
	this.wall2 = new MyQuad(this,0,10,0,12);
	this.floor = new MyQuad(this,0,10,0,12);
	this.cylinder = new MyCylinder(this,20,20);
	this.semicylinder = new MySemiCylinder(this,20,20);
	this.prism =new MyPrism(this,6,20);
	this.clockarino = new MyCylinderWithTops(this,12,8);
	this.drone = new MyDrone(this);
	this.sphere = new MySemiSphere(this,12,8);
	this.edge = new MyEdge(this);
	this.leg = new MyDroneLegs(this);
	
	this.boardA = new Plane(this, BOARD_A_DIVISIONS,-0.2, 1.3, 0.1, 0.8);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS, 0, 1, 0, 1);

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0,0.2,0.8,1);
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	this.wallAppearance = new CGFappearance(this);
	this.wallAppearance.loadTexture("..//resources/images/wall.png");
	this.wallAppearance.setAmbient(0.3,0.3,0.3,1);
	this.wallAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.wallAppearance.setSpecular(0,0.2,0.8,1);
	this.wallAppearance.setShininess(120);

	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.loadTexture("..//resources/images/floor.png");
	
	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.loadTexture("..//resources/images/window.png");

	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.loadTexture("..//resources/images/slides.png");
	this.slidesAppearance.setAmbient(0.4,0.2,0.1,1);
	this.slidesAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.slidesAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.slidesAppearance.setShininess(6);

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.loadTexture("..//resources/images/board.png");
	this.boardAppearance.setAmbient(0.4,0.2,0.1,1);
 	this.boardAppearance.setSpecular(0.5,0.5,0.5,0.5);
	this.boardAppearance.setDiffuse(0.3,0.3,0.3,0.3);
	this.boardAppearance.setShininess(80);


	this.setUpdatePeriod(100);


};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.update = function (currTime){
	

	if (this.Luz1)
		this.lights[0].enable();
	if (this.Luz2)
		this.lights[1].enable();
	if (this.Luz3)
		this.lights[2].enable();
	if (this.Luz4)
		this.lights[3].enable();

	if (!this.Luz1)
		this.lights[0].disable();
	if (!this.Luz2)
		this.lights[1].disable();
	if (!this.Luz3)
		this.lights[2].disable();
	if (!this.Luz4)
		this.lights[3].disable();

	if (this.ClockOn){
		this.clockarino.update(currTime);
	}	
 }



LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);
	
	// Positions for four lights

		// Positions for four lights
	this.lights[0].setPosition(4, 7, 1.5, 1);
	this.lights[1].setPosition(10.5, 7.0, 1.5, 1.0);
	this.lights[2].setPosition(10.5, 7.0, 8.0, 1.0);
	this.lights[3].setPosition(4, 7.0, 8.0, 1.0);
	

	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	this.lights[2].setVisible(true); // show marker on light position (different from enabled)

	this.lights[3].setVisible(true); // show marker on light position (different from enabled)

	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setLinearAttenuation(0.2);
	if (this.Luz1){
		this.lights[0].enable();
	}

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setLinearAttenuation(0.3);
	//this.lights[1].setQuadraticAttenuation(0.1);
	if (this.Luz2){
		this.lights[1].enable();
	}

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setConstantAttenuation(0); //Kc
	this.lights[2].setLinearAttenuation(0.2); //Kl
	//this.lights[2].setQuadraticAttenuation(0.1); //Kq
	if (this.Luz3){
		this.lights[2].enable();
	}
	
	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1.0, 1.0, 0.0, 1.0);
	this.lights[3].setConstantAttenuation(0); //Kc
	this.lights[3].setLinearAttenuation(0.3); //Kl
//	this.lights[3].setQuadraticAttenuation(0.1); //Kq
	if (this.Luz4){
		this.lights[3].enable();
	}
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section



	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');
		this.windowAppearance.apply();
		this.wall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.wallAppearance.setTextureWrap('REPEAT','REPEAT');
		this.wallAppearance.apply();
		this.wall2.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.slidesAppearance.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	
	//Cilindro
	this.pushMatrix();
		this.scale(1,4,1);
		this.translate(2,1,3);
		this.rotate(Math.PI/2,1,0,0);
		this.cylinder.display();
	this.popMatrix();

	//Prisma
	this.pushMatrix();
		this.scale(1,4,1);
		this.translate(5,1,3);
		this.rotate(Math.PI/2,1,0,0);
		this.prism.display();
	this.popMatrix();	

		// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.setTextureWrap('REPEAT','REPEAT');
		this.floorAppearance.apply();
		this.floor.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();

	//Clockarino
	this.pushMatrix();
		this.translate(7.3,7.2,0);
		this.scale(0.6,0.6,0.2);
		this.clockarino.display();
	this.popMatrix();	

	//Drone
	this.pushMatrix();
		this.translate(7.5 + this.drone.MotionX, 4 + this.drone.Height, 8 + this.drone.MotionZ);
		this.rotate(this.drone.Rot *degToRad +Math.PI,0,1,0);
		this.drone.display();
	this.popMatrix();	


	// ---- END Primitive drawing section
};

