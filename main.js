webcam= "";
canvas="";
model="";
statuss="";
endArray=[];
function preload() {
    sound=loadSound("welcome_to_my_house.mp3");
    webcam=createcapture(VIDEO);
 
} 
  
function setup() {
    canvas=createCanvas(600,420);
    canvas.center();
}
//This is where to look at to do point 2//
function draw() {
    image(webcam,0,0,600,420);
    if (statuss != "") {
        model.detect(webcam, results);
        for ( i = 0; i < endArray.length; i++) {
           
            document.getElementById("status").innerHTML="Baby Dectected";
            noFill();
            stroke("purple");
            x= endArray[i].x;
            y= endArray[i].y;
            width= endArray[i].width;
            height= endArray[i].height;
            label= endArray[i].label;
            rect(x,y,width,height);
            fill("yellow");
            stroke("purple");
            text(label,x+15,y+15);
        }
    }

    else {
        document.getElementById("status").innerHTML="Baby Not Dectected";
        sound.play();
    }
}

function results(arrayError, arrayResults) {
    if (arrayError) {
        console.error(arrayError);
    } 
    else {
        console.log(arrayResults);
        endArray=arrayResults;


    }
    
}

function begin() {
    model=ml5.objectDetector("cocossd", ml);
    document.getElementById("status").innerHTML="Status: Detecting...";
}

function ml() {
    console.error("The model is loaded :(");
    statuss=true;
}