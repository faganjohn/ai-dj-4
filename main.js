var song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreRightWrist=0;
scoreLeftWrist=0;


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}



function modelLoaded(){
    console.log("Model has been loaded");

}


function gotPoses(results){
    if(results.lenght>0){
        console.log(results);

        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist="+scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftwristX="+leftWristX+"leftWristY="+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightwristX="+rightWristX+"rightWristY="+rightWristY);
    }
    
    
}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
if(scoreLeftWrist>0.2){


    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="volume ="+volume;
    song.setVolume(volume);}
}
function preload(){
    song=loadSound("music.mp3");
    if(leftWristY.lenght>0){
        song=loadSound("XENESR DANCE SONG.mp3")
        console.log("xenesr dance song has been loaded")

    }
    if(rightWristY.lenght>0){
        song.loadSound("Alan Walker - The Spectre.mp3")
        console.log("spectre song has been loaded")
    }
}

function play(){
    song.play();
}