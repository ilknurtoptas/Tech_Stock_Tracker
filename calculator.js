<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stock Earnings Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
        }
        .calculator {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
        .calculator input, .calculator select, .calculator button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <h2>Stock Earnings Calculator</h2>
        <label for="amount">Amount ($):</label>
        <input type="number" id="amount" placeholder="Enter amount">

        <label for="timeframe">Timeframe (years):</label>
        <input type="number" id="timeframe" placeholder="Enter timeframe">

        <label for="stock">Stock:</label>
        <select id="stock">
            <option value="AAPL">Apple (AAPL)</option>
            <option value="MSFT">Microsoft (MSFT)</option>
            <option value="GOOGL">Google (GOOGL)</option>
            <option value="AMZN">Amazon (AMZN)</option>
            <option value="TSLA">Tesla (TSLA)</option>
            <option value="NVDA">NVIDIA (NVDA)</option>
            <option value="META">Meta (META)</option>
            <option value="AMD">AMD (AMD)</option>
            <option value="INTC">Intel (INTC)</option>
            <option value="NFLX">Netflix (NFLX)</option>
        </select>

        <button onclick="calculateEarnings()">Calculate Earnings</button>

        <h3 id="result"></h3>
    </div>

    <script>
        function calculateEarnings() {
            const amount = document.getElementById('amount').value;
            const timeframe = document.getElementById('timeframe').value;
            const stock = document.getElementById('stock').value;

            if (amount && timeframe && stock) {
                const growthRates = {
                    'AAPL': 0.10,
                    'MSFT': 0.11,
                    'GOOGL': 0.12,
                    'AMZN': 0.15,
                    'TSLA': 0.20,
                    'NVDA': 0.18,
                    'META': 0.14,
                    'AMD': 0.16,
                    'INTC': 0.08,
                    'NFLX': 0.13
                };

                const growthRate = growthRates[stock];
                const earnings = amount * Math.pow((1 + growthRate), timeframe);

                document.getElementById('result').innerText = `Estimated Earnings: $${earnings.toFixed(2)}`;
            } else {
                document.getElementById('result').innerText = 'Please fill in all fields.';
            }
        }
    </script>
</body>
</html>
