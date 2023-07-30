nosex=0
nosey=0
var diferencia=0
var rightx=0
var leftx=0
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
video.position(20,150);
canvas = createCanvas(500, 500);
canvas.position(560, 150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('modelo Inicializado');
}
function gotPoses(results){
if(results.length > 0)
{
console.log(results);
nosex=results[0].pose.nose.x
nosey=results[0].pose.nose.y
console.log("nosex="+nosex+"nosey"+nosey)
leftx=results[0].pose.leftWrist.x;
rightx=results[0].pose.rightWrist.x;
diferencia=floor(leftx-rightx);
console.log("leftx"+leftx+"rightx"+rightx+"diferencia"+diferencia);
}
}
function draw(){
background('#FFD700');
document.getElementById("square_side").innerHTML="el alto y ancho del cuadrado es"+diferencia;
fill("#9700FF")
stroke("#AE24D6")
square(nosex,nosey,diferencia)
}