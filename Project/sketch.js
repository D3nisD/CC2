let data01 = [{
        name: "United States",
        total: 42.70
    },
    {
        name: "Germany",
        total: 19
    },
    {
        name: "Netherlands",
        total: 14.20
    },
    {
        name: "Ireland",
        total: 25.90
    }, {
        name: "Australia",
        total: 31.30
    }, {
        name: "Belgium",
        total: 16.30
    },
    {
        name: "United Kingdom",
        total: 20.10
    },
    {
        name: "Mexico",
        total: 36
    },
    {
        name: "Finland",
        total: 21.20
    },
    {
        name: "Canada",
        total: 26.90
    }
];
let data02 = [{
        name: "United States",
        total: 76.2,
        values: [34, 42.20]
    },
    {
        name: "Germany",
        total: 60.7,
        values: [41.60, 19.10]
    },
    {
        name: "Netherlands",
        total: 56.4,
        values: [41.70, 14.70]
    },
    {
        name: "Ireland",
        total: 62.3,
        values: [36.60, 25.70]
    },
    {
        name: "Australia",
        total: 74.5,
        values: [42, 32.50]
    },
    {
        name: "Belgium",
        total: 56.3,
        values: [39.10, 17.20]
    },
    {
        name: "United Kingdom",
        total: 60.3,
        values: [40.50, 19.80]
    },
    {
        name: "Mexico",
        total: 72.1,
        values: [40.60, 31.50]
    },
    {
        name: "Canada",
        total: 65.3,
        values: [38.40, 26.90]
    },
];
let data03 = [{

        name: "United States",
        total: 42.20,
        values: [42.20, 41.80]
    },
    {
        name: "Germany",
        total: 19.10,
        values: [19.10, 19]
    },
    {
        name: "Netherlands",
        total: 15.70,
        values: [14.70, 15.70]
    },
    {
        name: "Ireland",
        total: 26,
        values: [25.70, 26]
    },
    {
        name: "Australia",
        total: 32.50,
        values: [32.50, 30.20]
    },
    {
        name: "Belgium",
        total: 17.20,
        values: [17.20, 15.60]
    },
    {
        name: "United Kingdom",
        total: 20.40,
        values: [19.80, 20.40]
    },
    {
        name: "Mexico",
        total: 40.20,
        values: [31.50, 40.20]
    },
    {
        name: "Finland",
        total: 21.80,
        values: [20.60, 21.80]
    },
    {
        name: "Canada",
        total: 27,
        values: [26.90, 27]
    },
]

let chart01;

function setup() {
    createCanvas(2070, 1050);

    chart01 = new BarChart(data01)
    chart01.chartX = 650;
    chart01.chartY = 300;
    chart01.posX = 130;
    chart01.posY = 420;
    chart01.updateValues();

    chart02 = new StackedBarChart(data02)
    chart02.chartX = 650;
    chart02.chartY = 300;
    chart02.posX = 930;
    chart02.posY = 420;
    chart02.updateValues();

    chart03 = new ClusterChart(data03)
    chart03.chartX = 1300;
    chart03.chartY = 300;
    chart03.posX = 130;
    chart03.posY = 920;
    chart03.updateValues();
}


function draw() {
    background(33, 41, 48);
    chart01.updateValues()
    chart01.render();
    chart02.updateValues()
    chart02.render();
    chart03.updateValues()
    chart03.render();
}