

// Create the pie chart
createPieChart();

function createPieChart() {
    const stocks = ['AAPL', 'AMD', 'AMZN', 'GOOGL', 'INTC', 'META', 'MSFT', 'NFLX', 'NVDA', 'TSLA'];
    const totalPerformance = {};

    // Calculate total performance for each stock over the 10-year period
    stocks.forEach(stock => {
        let total = 0;
        for (let year = 2015; year <= 2025; year++) {
            if (stockData[stock] && stockData[stock][year]) {
                stockData[stock][year].forEach(record => {
                    total += record.Close;  // Sum up the closing prices
                });
            }
        }
        totalPerformance[stock] = total;
    });

    const data = [{
        values: Object.values(totalPerformance),
        labels: Object.keys(totalPerformance),
        type: 'pie'
    }];

    const layout = {
        title: 'Stock Performance (2015-2025)',
    };

    Plotly.newPlot('plot', data, layout);
}


