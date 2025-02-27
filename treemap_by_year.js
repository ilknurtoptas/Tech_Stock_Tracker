document.addEventListener("DOMContentLoaded", function() {
    // 1. Populate the year dropdown from stockList.years
    let yearSelect = document.getElementById("yearSelect");
    stockList.years.forEach(year => {
      let option = document.createElement("option");
      option.value = year;
      option.text = year;
      yearSelect.appendChild(option);
    });
  
    // 2. Listen for changes and draw the treemap
    yearSelect.addEventListener("change", updateTreemap);
  
    // Optionally, set an initial selection
    if (stockList.years.length > 0) {
      yearSelect.value = stockList.years[0];
      updateTreemap();
    }
  
    function updateTreemap() {
      let selectedYear = yearSelect.value;
      if (!selectedYear) return;
  
      // We'll store the final arrays for Plotly
      let labels = [];
      let values = [];    // average close -> used for rectangle size
      let changes = [];   // percentage change -> used for color
      let hoverData = []; // custom data for hover (first day, last day, etc.)
  
      // 3. For each stock, compute average close & year-over-year % change
      stockList.stocks.forEach(stock => {
        let records = stockData[stock]?.[selectedYear];
        if (!records || records.length === 0) {
          return; // No data for this stock/year
        }
  
        // Sort by date if not guaranteed sorted
        // (Often the data is already sorted, but just in case)
        records.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  
        // First and last close
        let firstClose = records[0].Close;
        let lastClose  = records[records.length - 1].Close;
  
        // Percentage change from first to last close
        let percentChange = ((lastClose - firstClose) / firstClose) * 100;
  
        // Average close across the year
        let sum = records.reduce((acc, r) => acc + r.Close, 0);
        let avgClose = sum / records.length;
  
        labels.push(stock);
        values.push(avgClose);
        changes.push(percentChange);
  
        // Prepare any extra hover info you want
        hoverData.push({
          stock,
          firstClose: firstClose.toFixed(2),
          lastClose: lastClose.toFixed(2),
          avgClose: avgClose.toFixed(2),
          percentChange: percentChange.toFixed(2)
        });
      });
  
      // 4. Determine color scale min/max from changes
      let cmin = Math.min(...changes);
      let cmax = Math.max(...changes);
  
      // 5. Build the treemap trace
      let treemapTrace = {
        type: "treemap",
        labels: labels,
        parents: Array(labels.length).fill(""), // single-level
        values: values, // size of each rectangle by average close
        marker: {
          colors: changes, // color by percentChange
          cmin: cmin,
          cmax: cmax,
          colorscale: [
            [0, "rgb(255,0,0)"],       // Red at the min
            [0.5, "rgb(255,255,255)"], // White around 0% change
            [1, "rgb(0,200,0)"]        // Green at the max
          ],
          colorbar: {
            title: "% Change",
            ticksuffix: "%"
          }
        },
        // Custom hovertemplate
        hovertemplate:
          "<b>%{label}</b><br>" +
          "Avg Close: $%{customdata[2]}<br>" +
          "Change: %{customdata[4]}%<br>" +
          "First Close: $%{customdata[1]}<br>" +
          "Last Close: $%{customdata[3]}<br>" +
          "<extra></extra>",
        // Pass the hoverData in the order we used for push
        customdata: hoverData.map(h => [
          h.stock,
          h.firstClose,
          h.avgClose,
          h.lastClose,
          h.percentChange
        ])
      };
  
      // 6. Define layout
      let layout = {
        title: `Treemap for ${selectedYear}`,
        margin: { t: 50, l: 0, r: 0, b: 0 }
      };
  
      // 7. Render the treemap
      Plotly.newPlot("treemap", [treemapTrace], layout);
    }
  });