class Barchart {
    constructor(_data) {

        this.data = _data;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 10;
        this.numTicks = 4;
        this.posX = 100;
        this.posY = 350;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 2;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [
            color('#ffe066'),
            color('#fab666'),
            color('#f68f6a'),
            color('#f3646a')
        ];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function (x) {
            return x.total
        })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {
        background(0);

        translate(posX, posY);

        this.drawTicks();
        this.drawHorizontalline();
        this.drawRects();
        this.drawAxis();

    }
}
scaleData(num) {
    return map(num, 0, this.maxValue, 0, this.chartHeight);
}

drawAxis() {
    // chart
    stroke(255, 180);
    strokeWeight(1);
    // y-Axis
    line(0, 0, 0, -this.chartHeight); //y
    // x-Axis
    line(0, 0, this.chartWidth, 0); //x
}

drawTicks() {
    for (let i = 0; i <= this.numTicks; i++) {
        //ticks
        stroke(255, 100);
        strokeWeight(1);
        line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

        //numbers (text)
        if ()
            fill(255, 200);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
    }
}

drawHorizontalline() {
    for (let i = 0; i <= this.numTicks; i++) {
        //horizontal line
        stroke(255, 50);
        strokeWeight(1);
        line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
    }
}

drawRects() {
    push()
    translate(this.margin, 0);
    for (let i = 0; i < this.data.length; i++) {
        let colorNumber = i % 4



        //bars
        fill(this.colors[colorNumber]);
        noStroke();
        rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaleData(data[i].total));

        //numbers (text)
        if (this.showValues) {
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaleData(data[i].total));
        }


        //text
        if (showLabels) {
            if (rotateLabels) {
                push()

                noStroke();
                fill(255);
                textSize(11);
                textAlign(LEFT, CENTER);

                translate(((barWidth + spacing) * i) + barWidth / 2, 10)
                rotate(PI / 2)
                text(data[i].name, 0, 0);
                pop()
            } else {
                noStroke();
                fill(255);
                textSize(11);
                textAlign(CENTER, BOTTOM);
                text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
            }

        }

    }
    pop()
}