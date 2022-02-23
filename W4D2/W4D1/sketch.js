let data01 = [{
        name: "Oranges",
        total: 23
    },
    {
        name: "Bananas",
        total: 34
    },
    {
        name: "Pears",
        total: 23
    },
    {
        name: "Apples",
        total: 18
    }
];

let data02 = [{
        name: "Oranges",
        total: 223
    },
    {
        name: "Bananas",
        total: 134
    },
    {
        name: "Pears",
        total: 233
    },
    {
        name: "Apples",
        total: 118
    }
];
let data03 = [{
        name: "Oranges",
        total: 273
    },
    {
        name: "Bananas",
        total: 91
    },
    {
        name: "Pears",
        total: 33
    },
    {
        name: "Apples",
        total: 198
    }
];
let data04 = [{
    name: "Oranges",
    total: 273
},
{
    name: "Bananas",
    total: 91
},
{
    name: "Pears",
    total: 33
},
{
    name: "Apples",
    total: 198
}
];

let chart01;
let chart02;
let chart03;
let chart04;

function setup() {
    createCanvas(800, 800);

    chart01 = new BarChart(data01)
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.posX = 100;
    chart01.posY = 400;
    chart01.updateValues();

    chart02 = new BarChart(data02)
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = 400;
    chart02.posY = 400;
    chart02.updateValues();

    chart03 = new HorizontalBarChart(data03)
    chart03.chartWidth = 200;
    chart03.chartHeight = 295;
    chart03.posX = 100;
    chart03.posY = 700;
    chart03.updateValues();

    chart04 = new StackedBarChart(data03)
    chart04.chartWidth = 200;
    chart04.chartHeight = 200;
    chart04.posX = 500;
    chart04.posY = 700;
    chart04.updateValues();

}


function draw() {
    background(50);
    chart01.updateValues()
    chart01.render();
    chart02.updateValues()
    chart02.render();
    chart03.updateValues()
    chart03.render();
    chart04.updateValues()
    chart04.render();

}