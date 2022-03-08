let showGrid = true;
let numXGrid = 20;
let numYGrid = 10;

let rotationValue=0;


function setup(){
    createCanvas(500, 500)
    background(0)
    angleMode(DEGREES)
    rectMode(CENTER)
    
}

function draw(){
    background(0)
    if(showGrid == true){
        drawGrid(numXGrid,numYGrid);  
    }
 

}







