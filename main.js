NoseX = 0;
NoseY = 0;
function preload(){
moustache = loadImage('https://i.postimg.cc/L4ZmSdtN/image-removebg-preview-1.png');
}
function setup(){
    canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("Nose X = " + NoseX);
        console.log("Nose Y = " +NoseY);
    }
}
function modelLoaded(){
console.log("PoseNet Is Initialized");    
}
function draw(){
image(video,0,0,300,300);
image(moustache,NoseX-35,NoseY+5,80,30);
}

function take_snapshot(){
save('myfilteredimage.png');
}