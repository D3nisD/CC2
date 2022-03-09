class ClusterChart {
    constructor(_data) {
        this.data = _data;

        this.chartX = 500;
        this.chartY = 300;
        this.spacing = 100;
        this.margin = 50;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 400;

        this.tickIncrements;
        this.maxValue;
        this.numPlaces;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;


        this.title;
        this.titleFontSize;

        this.colors = [color('#6EB5FF'), color('#FFCCF9')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartY / this.numTicks;
        this.availableWidth = this.chartX - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;

        this.title = "Comparing Males to Female Obesity Levels in selected Countries";
        this.titleFontSize = 17;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) {
            return x.total
        })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        this.drawTitle();
        pop()
    }

    drawTitle() {
        fill(159, 155, 116);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.title, this.chartX / 2, -this.chartY - 50)
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartY);
    }

    drawAxis() {
        //chart
        stroke(159, 155, 116, 50);
        strokeWeight(1);
        line(0, 0, 0, -this.chartY); //y
        line(0, 0, this.chartX, 0); //x
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(159, 155, 116, 255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(159, 155, 116);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(159, 155, 116, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartX, this.tickSpacing * -i);


        }
    }

    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            push();
            for (let j = 0; j < this.data[i].values.length;j++){
                let colorNumber = j % 4;
                fill(this.colors[colorNumber]);
                rect((this.barWidth + this.spacing) * i,0, this.barWidth, this.scaleData(-this.data[i].values[j]));
                translate(this.barWidth+2,0)
            }
            pop();
            
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    text(this.data[i].name, 0, 0);
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