class HorizontalBarChart {
    constructor(_data) {
        this.data = _data;
        //set values have numbers
        //values not set need calculations
        //seperate to make it look better
        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.title = "CHART"; // add a title

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];

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

        push()
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawVerticalLines();
        this.drawRects();
        this.drawAxis();
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartWidth); //y
        line(0, 0, this.chartHeight, 0); //x
    }

    drawTicks() {

        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 20);


            }
        }
    }

    drawVerticalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartWidth);


        }
    }

    drawRects() {
        push();
        translate(0, -this.margin);

        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 4;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect(0, (this.barWidth + this.spacing) * -i, this.scaleData(this.data[i].total), -this.barWidth);

            //numbers (text)
            noStroke();
            // rect(0,0,30)
            fill(255);
            textSize(16);
            textAlign(LEFT, CENTER);
            // text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth * 2, this.scaleData(-this.data[i].total));

            text(this.data[i].total, this.scaleData(this.data[i].total), ((this.barWidth + this.spacing) * -i) - this.barWidth / 2);

            //text syntax is text(str, x, y, [x2], [y2])
            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()

                    noStroke();
                    textSize(14);
                    textAlign(RIGHT, CENTER);

                    translate(-10, ((-this.barWidth - this.spacing) * i) - this.barWidth / 2); //translate(x,y)
                    text(this.data[i].name, 0, 0);
                    // rotate(PI *  2)

                    // translate(this.data[i].name);
                    pop()
                } else {

                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }


        }
        pop()
    }
}