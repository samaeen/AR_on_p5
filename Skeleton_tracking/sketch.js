let video;
let poseNet;
let noseX=0;
let noseY=0;

function setup(){
	createCanvas(640,480);
	video=createCapture(VIDEO);
	video.hide();
	posNet=ml5.poseNet(video,modelReady);
	posNet.on('pose',gotPoses);

}
function draw(){
	image(video,0,0);
	fill(255,0,0);
	ellipse(noseX,noseY,50);
}
function gotPoses(poses){
	console.log(poses);
	if(poses.length>0){
		let newX=poses[0].pose.keypoints[0].position.x;
		let newY=poses[0].pose.keypoints[0].position.y;
		noseX=lerp(noseX,newX,0.2);
		noseY=lerp(noseY,newY,0.2);
	}

}
function modelReady(){
	console.log('model Ready');
}
