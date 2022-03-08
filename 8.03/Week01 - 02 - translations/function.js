function drawBoxes(numBoxes,boxWidth,boxHeight,boxSpacing){
    if(numBoxes>20){
       // console.log("too many boxes you crazy horse")
        return "too many boxes you crazy horse";

    }
    fill(255,0,0)
    stroke(255) 
    for(let i=0;i<numBoxes;i++){
        rect(i*boxSpacing,30,boxWidth,boxHeight)
    }
    return "completed"
}

function drawGrid(numXGrid,numYGrid){
    let xSpacing = width/numXGrid;
    let ySpacing = height/numYGrid;
    noFill()
    stroke(255,100)
    for(let j=0;j<numYGrid;j++){
        for(let i=0;i<numXGrid;i++){
            push()
            
            translate(i*xSpacing,j*ySpacing)
            rotate(rotationValue++)
            rect(0,0,xSpacing,ySpacing)
            pop()
        }
    }

}