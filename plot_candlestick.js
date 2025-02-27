
// Populate Dropdowns
let stockSelect = document.getElementById("stockSelect");
let yearSelect = document.getElementById("yearSelect");

stockList.stocks.forEach(stock => {
    let option = document.createElement("option");
    option.value = stock;
    option.text = stock;
    stockSelect.appendChild(option);
});

stockList.years.forEach(year => {
    let option = document.createElement("option");
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
});

// Event Listener for "Show Graph" Button
document.getElementById("stockSelect").addEventListener("change", updateGraph);
document.getElementById("yearSelect").addEventListener("change", updateGraph);

function updateGraph() {
    let stock = document.getElementById("stockSelect").value;
    let year = document.getElementById("yearSelect").value;
    if (!stock || !year) return;


    let dataPoints = stockData[stock][year];
    if (!dataPoints) return;

    let dates = dataPoints.map(d => d.Date);
    let openPrices = dataPoints.map(d => d.Open);
    let highPrices = dataPoints.map(d => d.High);
    let lowPrices = dataPoints.map(d => d.Low);
    let closePrices = dataPoints.map(d => d.Close);

    // Plot Graph
    let trace = {
        x: dates,
        open: openPrices,
        high: highPrices,
        low: lowPrices,
        close: closePrices,
        type: 'candlestick',
        name: stock
    };

    let layout = {
        title: `${stock} Candlestick Chart (${year})`,
        xaxis: { title: "Date" },
        yaxis: { title: "Price (USD)" }
    };

    Plotly.newPlot("plot", [trace], layout);
}
