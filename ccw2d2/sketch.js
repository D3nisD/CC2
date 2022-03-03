let chartWidth = 400;
let chartHeight = 400;
let data = [30, 90, 20,34,56,123]
let dataLabels = ["tshirts","jeans","belts","hats","shoes","glasses"]


let scaledData = [];
let scaledData2;
let maxValue

console.log(maxValue);
let spacing = 10;
let margin = 40;


let numTicks = 5;
let tickLength = 10;
let tickSpacing = chartHeight / numTicks
let tickIncrements;

let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = availableWidth / data.length;
let sideNum = 10
let tick
let sideSpacing = chartWidth / sideNum;
let numSpacing = chartWidth / sideNum;



function setup() {
    createCanvas(500, 500);
    background(0);

    maxValue = max(data);
    tickIncrements = Math.round(maxValue / numTicks);

    for (let i = 0; i < data.length; i++) {
        let tempVal = map(data[i], 0, maxValue, 0, chartHeight)
        // let tempVal = data[i] * 4;
        scaledData.push(tempVal)
    }

}


function draw() {
    background(0);
    translate(50, 450);

    // fill(255, 0, 0);
    // noStroke();
    // textSize(20);
    // text("John", 0, 20);

    stroke(255);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight);
    line(0, 0, chartWidth, 0);

    stroke(255, 200);
    strokeWeight(1);
    for (let i = 0; i <= sideNum; i++) {
        fill(255);
        noStroke();
        textSize(12);
        textAlign(CENTER, CENTER);
        text(tickIncrements * i, -sideNum, -numSpacing * i);
        stroke(255);
        line(0, -sideSpacing * i, -sideNum, -sideSpacing * i);
    }

    translate(margin, 0);
    fill(0, 255, 0);
    noStroke();
    for (let i = 0; i < scaledData.length; i++) {
        noStroke();
        fill(0, 164, 230)
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        noStroke()
        fill(220, 94, 255)
        textSize(18)
        textAlign(CENTER, CENTER)
        text(data[i], ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i] + 13)

        noStroke()
        fill(
            0, 51, 255
            )
        textSize(18)
        textAlign(CENTER, CENTER)
        text(dataLabels[i], ((barWidth + spacing) * i) + barWidth / 2, 13)

    }

}