nosex=""
nosey=""
function preload(){
    clownnose=loadImage("Clown-Nose-PNG-image.png")
}
function setup(){
    canvas=createCanvas(600,400)
    canvas.center()
video=createCapture(VIDEO)
video.size(600,400)
video.hide()


poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw(){
image(video,0,0 , 600,400)
image(clownnose,nosex,nosey,60,60)


}
function take_snapshot(){
    save("clownfiterimg.png") 
}

function modelLoaded(){
    console.log("model is loaded")
}
function gotPoses(result){
if(result.length > 0){

    console.log(result)
    nosex=result[0].pose.nose.x-30
    nosey=result[0].pose.nose.y-15
}


}


