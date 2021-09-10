noseX=0;
noseY=0;
leftWristX=0;
rightWrist=0;
difference=0;

function setup()
{
video= createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,500);
canvas.position(560,150);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#F37694')
    text( "Khushi" ,noseX, noseY, difference);//usually used to draw a text
    fill('#6CF1D1');
    stroke('#090909');
}

function modelLoaded()
{
    console.log("poseNet model is Loaded")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" + noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;

        difference=floor(leftWristX-rightWristX);
        console.log(" leftWristX" + leftWristX + " rightWristY" + rightWristX + " difference" + difference)
    }
}