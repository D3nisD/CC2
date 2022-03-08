// newData[2].total shows the third objects value
// newData[1].name shows the second objects name
// newData[2].subTotals[2] shows the third object's subtotal array 
// let newData = [
//     { name: "Oranges", value: 63, subTotal: [23, 45, 5] },
//     { name: "Bananas", value: 33, subTotal: [23, 45, 5] },
//     { name: "Pears", value: 21, subTotal: [23, 45, 5] },
//     { name: "Apples", value: 43, subTotal: [23, 45, 5] }
// ]
let data01 = [{
        name: "Oranges",
        total: 63,
    },
    {
        name: "Bananas",
        total: 33,
    },
    {
        name: "Pears",
        total: 21,
    },
    {
        name: "Apples",
        total: 43,
    },
    {
        name: "Pears",
        total: 121,
    },
    {
        name: "Apples",
        total: 43,
    }
]
let data02 = [{
    name: "Oranges",
    total: 24,
},
{
    name: "Bananas",
    total: 12,
},
{
    name: "Pears",
    total: 77,
},
{
    name: "Apples",
    total: 22,
},
{
    name: "Pears",
    total: 82,
},
{
    name: "Apples",
    total: 42,
}
]
function setup() {
    createCanvas(500, 500);
    chart01 = new Barchart(data01)
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.posX = 100;
    chart01.posY = 400;
    chart01.updateValues();

    chart02 = new Barchart(data02 )
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = 400;
    chart02.posY = 400;
    chart02.updateValues();
}



function draw() {
    background(0);
}

