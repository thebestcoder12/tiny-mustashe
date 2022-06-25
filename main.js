function preload(){
    knows=loadImage("sinep.png")
}

function setup (){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x-20;
        noseY=result[0].pose.nose.y;
    }
}
noseX=15;
noseY=15
function draw (){
    image(video,0,0,300,300)
    image(knows,noseX,noseY,30,30)
}

function saveImage(){}