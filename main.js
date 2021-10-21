status1 = "";
video = "";

function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objectname = document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw()
{
    image(video,0,0,380,380);
}

