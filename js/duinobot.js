function _send(object, async){
	var req = new XMLHttpRequest();
	req.open("POST", "http://localhost:8000/", async);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send("commands=" + JSON.stringify(object));
	if (!async) return req.responseText;
}
function Board(device){
	this.device = device;
	_send([{
		target: "board",
		command: "__init__",
		board: {device: this.device}
	}], false);
}

function Robot(board, id){
	this.board = board;
	this.id = id;
	_send([{
		target: "robot",
		command: "__init__",
		board: {device: this.board.device},
		id: this.id
	}], false);
}
Robot.prototype.motors = function (){ // left = 50, right = 50, time = -1
	var left = 50, right = 50, time = -1;
	if (arguments.length > 2) time = arguments[2];
	if (arguments.length > 1) left = arguments[1];
	if (arguments.length > 0) right = arguments[0];

	var args = Array(left, right);
	var async = true;
	if (time >= 0){
		args.push(time);
		async = false;
	}
	_send([{
		target: "robot",
		board: {device: this.board.device},
		id: this.id,
		command: "motors",
		args: [left, right, time]
	}], async);
}
Robot.prototype.forward = function (){ // speed = 50, time = -1
	var args = new Array();
	if (arguments.length > 0){
		args.push(arguments[0]);
		args.push(arguments[0]);
		if (arguments.length > 1) args.push(arguments[1]);
	}
	this.motors.apply(this, args)
}
Robot.prototype.backward = function (){ // speed = 50, time = -1
	var speed = 50, time = -1;
	if (arguments.length > 1) time = arguments[1];
	if (arguments.length > 0) speed = arguments[0];
	this.forward(-speed, time);
}
Robot.prototype.turnLeft = function (){ // speed = 50, time = -1
	var speed = 50, time = -1;
	if (arguments.length > 1) time = arguments[1];
	if (arguments.length > 0) speed = arguments[0];
	this.motors(speed, -speed, time);
}
Robot.prototype.turnRight = function (){ // speed = 50, time = -1
	var speed = 50, time = -1;
	if (arguments.length > 1) time = arguments[1];
	if (arguments.length > 0) speed = arguments[0];
	this.motors(-speed, speed, time);
}
Robot.prototype.stop = function (){
	_send([{
		target: "robot",
		board: {device: this.board.device},
		id: this.id,
		command: "stop",
	}], true);
}
Robot.prototype.ping = function(){
	var ret = _send([{
		target: "robot",
		board: {device: this.board.device},
		id: this.id,
		command: "ping",
	}], false);
	return JSON.parse(ret).values[0];
}
Robot.prototype.getLine = function(){
	var ret = _send([{
		target: "robot",
		board: {device: this.board.device},
		id: this.id,
		command: "getLine",
	}], false);
	return JSON.parse(ret).values[0];
}

/*
var b = new Board("/dev/ttyUSB0");
var r = new Robot(b, 1);
r.turnLeft(100, 20);
r.turnLeft(100);
r.turnLeft();
r.stop();
alert(r.ping());
alert(r.getLine());
*/
