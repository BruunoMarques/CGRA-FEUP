/**
 * MyCylinderWithTops
 * @constructor
 */
 function MyCylinderWithTops(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	

	this.slices = slices;
	this.stacks = stacks;

	this.lastTime = 0;

	this.pointerAppearance = new CGFappearance(this.scene);
	this.pointerAppearance.setDiffuse(0,0,0,0);
	this.pointerAppearance.setSpecular(0,0,0,0);
	this.pointerAppearance.setShininess(5);

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.loadTexture("..//resources/images/clock.png");

	
 	this.myCircle = new MyCircle(this.scene,this.slices);
 	this.myCircle.initBuffers();
	
	this.myCylinder = new MyCylinder(this.scene,this.slices, this.stacks);
	this.myCylinder.initBuffers();

	this.clockHandH = new MyClockHand(this.scene, 0, 1, 0, 1, 0);
	this.clockHandH.initBuffers();
	this.clockHandM = new MyClockHand(this.scene, 0, 1, 0, 1, 0);
	this.clockHandM.initBuffers();
	this.clockHandS = new MyClockHand(this.scene, 0, 1, 0, 1, 0);
	this.clockHandS.initBuffers();

	this.clockHandS.setAngle(270);
	this.clockHandM.setAngle(180);
	this.clockHandH.setAngle(90);

 	this.initBuffers();
 };


 MyCylinderWithTops.prototype = Object.create(CGFobject.prototype);
 MyCylinderWithTops.prototype.constructor = MyCylinderWithTops;

 MyCylinderWithTops.prototype.update = function(currTime){
 	var secInc = 0;
 
	if (this.lastTime == 0) {
		 secInc = 0;
	}
	else {
		var diff = currTime - this.lastTime;
		secInc = diff * (360 / (60 * 1000));
	}
	this.lastTime = currTime;

	if (this.scene.ClockOn){
	this.clockHandS.setAngle(this.clockHandS.angle + secInc);
	this.clockHandM.setAngle(this.clockHandM.angle + secInc / 60);
	this.clockHandH.setAngle(this.clockHandH.angle + secInc /60/60);
	}

 };

 MyCylinderWithTops.prototype.display = function() {
	this.myCylinder.display();
		
	//pointeiroSegundos
	this.scene.pushMatrix();
	this.scene.rotate( this.clockHandS.angle * -degToRad,0,0,1);
	this.scene.translate(0,0.2,1);
	this.scene.scale(0.01,0.7,0.2);
	this.pointerAppearance.apply();
	this.clockHandS.display();
	this.scene.popMatrix();	


	//ponteiroMinutos
	this.scene.pushMatrix();
	this.scene.rotate(this.clockHandM.angle * -degToRad,0,0,1);
	this.scene.translate(0,0.2,1);
	this.scene.scale(0.05,0.6,0.2);
	this.pointerAppearance.apply();
	this.clockHandM.display();
	this.scene.popMatrix();	


	//ponteiroHoras
	this.scene.pushMatrix();
	this.scene.rotate(this.clockHandH.angle * -degToRad,0,0,1);
	this.scene.translate(0,0.2,1);
	this.scene.scale(0.05,0.4,0.2);
	this.pointerAppearance.apply();
	this.clockHandH.display();
	this.scene.popMatrix();	

	//front
	this.scene.pushMatrix();
	this.scene.translate(0,0,1);
	this.clockAppearance.apply();
	this.myCircle.display();
	this.scene.popMatrix();

	//back
	this.scene.pushMatrix();
	this.scene.rotate(Math.PI,1,0,0);
	this.myCircle.display();
	this.scene.popMatrix();
 }