// This function populates the start and end date dropdowns with dates available in stockData for the selected stock.
function populateDateDropdowns() {
    const stockSelect = document.getElementById('stock');
    const startSelect = document.getElementById('startDate');
    const endSelect = document.getElementById('endDate');
    const selectedStock = stockSelect.value;
  
    // Clear any existing options
    startSelect.innerHTML = '';
    endSelect.innerHTML = '';
  
    const stockRecordsByYear = stockData[selectedStock];
    if (!stockRecordsByYear) return;
  
    // Flatten the data across years into a single array
    let allRecords = [];
    for (const year in stockRecordsByYear) {
      allRecords = allRecords.concat(stockRecordsByYear[year]);
    }
  
    // Sort records by date (ascending)
    allRecords.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  
    // Populate both dropdowns with the available dates
    allRecords.forEach(record => {
      const optionStart = document.createElement('option');
      optionStart.value = record.Date;
      optionStart.text = record.Date;
      startSelect.appendChild(optionStart);
  
      const optionEnd = document.createElement('option');
      optionEnd.value = record.Date;
      optionEnd.text = record.Date;
      endSelect.appendChild(optionEnd);
    });
  
    // Set default selections (earliest date for start, latest for end)
    if (allRecords.length > 0) {
      startSelect.value = allRecords[0].Date;
      endSelect.value = allRecords[allRecords.length - 1].Date;
    }
  }
  
  // This function calculates the stock’s value based on the investment amount and the selected start/end dates.
  function calculateStockValue() {
    const amountInput = document.getElementById('amount');
    const stock = document.getElementById('stock').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const resultElem = document.getElementById('result');
  
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
      resultElem.innerText = "Please enter a valid investment amount.";
      return;
    }
  
    if (!startDate || !endDate) {
      resultElem.innerText = "Please select both a start and an end date.";
      return;
    }
  
    // Ensure the start date is before the end date
    if (new Date(startDate) >= new Date(endDate)) {
      resultElem.innerText = "Start date must be before end date.";
      return;
    }
  
    // Retrieve all records for the selected stock
    const recordsByYear = stockData[stock];
    if (!recordsByYear) {
      resultElem.innerText = "Stock data not found.";
      return;
    }
    let allRecords = [];
    for (const year in recordsByYear) {
      allRecords = allRecords.concat(recordsByYear[year]);
    }
    // Sort records by date
    allRecords.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  
    // Find the records that exactly match the chosen start and end dates.
    // (You could also add logic to choose the nearest available date if needed.)
    let startRecord = allRecords.find(record => record.Date === startDate);
    let endRecord = allRecords.find(record => record.Date === endDate);
  
    if (!startRecord) {
      resultElem.innerText = "Data for the start date not found.";
      return;
    }
    if (!endRecord) {
      resultElem.innerText = "Data for the end date not found.";
      return;
    }
  
    // Calculate the number of shares bought on the start date.
    const shares = amount / startRecord.Close;
    // Calculate the final value at the end date.
    const finalValue = shares * endRecord.Close;
  
    resultElem.innerText = `Investing $${amount.toFixed(2)} in ${stock} on ${startDate} at $${startRecord.Close.toFixed(2)} per share would be worth $${finalValue.toFixed(2)} on ${endDate} (shares bought: ${shares.toFixed(4)}).`;
  }
  
  // When the stock is changed, update the available dates.
  document.getElementById('stock').addEventListener('change', populateDateDropdowns);
  // Calculate value when the user clicks the button.
  document.getElementById('calculateButton').addEventListener('click', calculateStockValue);
  
  // Populate the date dropdowns when the page loads.
  populateDateDropdowns();