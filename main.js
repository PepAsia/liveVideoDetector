status = "";
objects = [];

function setup()
{
    canvas = createCanvas(650,430);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    result = document.getElementById("name").value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 650, 430);
}