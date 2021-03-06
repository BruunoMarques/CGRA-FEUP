/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'ClockOn');	

	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Luzes");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'Luz1');
	group.add(this.scene, 'Luz2');
	group.add(this.scene, 'Luz3');
	group.add(this.scene, 'Luz4');


	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', -5, 5);

	this.gui.add(this.scene, 'scaling_factor', 0.1, 2);

	this.gui.add(this.scene, 'currDroneAppearance', this.scene.droneAppearanceList );

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
/*	
	if (event.keyCode == 68 || event.keyCode == 100) {
		this.scene.drone.rotateLeft(this.scene.speed);
		this.scene.drone.pitch();
	}
*/
	};


	MyInterface.prototype.processKeyUp = function(){
		this.scene.drone.RotSpeed = 0;
		this.scene.drone.ResetVars();
		console.log('keyUp');
	}	


MyInterface.prototype.processKeyDown = function(event){

	CGFinterface.prototype.processKeyDown(this,event);


	if (event.keyCode == 68 || event.keyCode == 100) {
		this.scene.drone.keyLeft = 1;
		}
		
	else if (event.keyCode == 65 ||event.keyCode == 97){
		this.scene.drone.keyRight= 1;	
	} 
	
	else if (event.keyCode == 74 ||event.keyCode == 106){
		this.scene.drone.keyDown = 1;
	}

	else if (event.keyCode == 73 ||event.keyCode == 105){
		this.scene.drone.keyUp = 1;
	}

	else if (event.keyCode == 87 ||event.keyCode == 119){
		this.scene.drone.keyForward = 1 ;
		this.scene.drone.allkeys = 1;
	}

	else if (event.keyCode == 83 ||event.keyCode == 115){
		this.scene.drone.keyBack = 1;
		this.scene.drone.allkeys = 1;
	}

	else if (event.keyCode == 80 ||event.keyCode == 112){
		if(this.scene.hook.strech > 0.5){
			this.scene.hook.strech -= 0.2;
		}
	
	}

	else if (event.keyCode == 76 ||event.keyCode == 108){
		this.scene.hook.strech += 0.2;
	}

};