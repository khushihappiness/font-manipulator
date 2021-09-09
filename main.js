noseX=0;
noseY=0;

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
    square(noseX, noseY, 100);//usually used to draw a square
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
    }
}