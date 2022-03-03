let showBoxes = true;
let numBoxes = 25;
let boxWidth =10;
let boxHeight=20;
let boxSpacing=14;


function setup(){
    createCanvas(500, 500)
    background(150)
}

function draw(){
    if(showBoxes == true){
        drawBoxes(numBoxes,boxWidth,boxHeight,boxSpacing);  
    }
}

