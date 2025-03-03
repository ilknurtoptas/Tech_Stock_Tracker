# Tech Stock Tracker
## Stock Visualization & Calculator
 
### Overview

This project is a stock visualization and projection calculator designed to help users analyze stock market trends and estimate potential returns on investment. It provides interactive charts, regression analysis, and a stock value projection tool. Users can visualize stock data using different graph types such as candlestick charts, regression graphs, pie charts, and treemaps. The calculator feature allows users to input an investment amount, select a stock and date range, and see the projected return based on historical data.

For small to medium traders, this tool offers valuable insights into market trends, helping them make informed decisions. By utilizing historical stock data, traders can identify patterns, assess volatility, and determine the potential profitability of an investment. The regression graph and candlestick charts allow traders to analyze price movements over time, while the calculator function provides a simplified way to estimate returns based on past performance. This empowers traders with data-driven decision-making, reducing reliance on speculation and enhancing their trading strategies.

### How to Use

Open index.html in a web browser.

Select a mode:

Stock Visualization: Choose a stock, select a year, and pick a chart type to view stock trends.

Stock Projection Calculator: Enter an investment amount, select a stock and date range, and compute potential returns.

View results in the graphical output area.

Ensure that the stock_data.js, plot_graph.js, and stock_calculator.js files are loaded correctly for full functionality.

### Ethical Considerations

This project aims to provide transparent and accessible financial data for educational and analytical purposes. However, users should be aware of the following ethical considerations:

No Financial Advice: The tool is for informational purposes only and does not constitute financial advice. Users should conduct independent research before making investment decisions.

Data Accuracy: The stock data is historical and may not reflect real-time market conditions. Efforts have been made to ensure accuracy, but discrepancies may exist.

User Responsibility: Investments are subject to risk, and past performance is not indicative of future results. Users should take personal responsibility for financial decisions.

### References

#### Data Sources

Stock data has been sourced from Yahoo Finance.

#### External Code References

plotly.js library is used for data visualization (https://plotly.com/javascript/).

Additional JavaScript utilities adapted from open-source resources for graph plotting and stock calculations.

#### Project Files

index.html - Main interface for the visualization and calculator.

plot_graph.js - Handles the rendering of different stock graphs.

stock_calculator.js - Implements the stock projection calculator.

stock_data.js - Contains historical stock data.

stock_list.json - Lists available stocks and years for analysis.

#### Conclusion

The aim of this project was to create an interactive stock analysis tool that helps small investors make informed decisions by providing insights into market trends, stock performance, and potential investment returns. Utilizing advanced visualization techniques such as candlestick charts, regression graphs, and treemaps, the tool enables a comprehensive analysis of historical stock data. The Stock Value Calculator adds a practical "what-if" feature, allowing investors to explore different investment scenarios. By leveraging modern technologies like Flask, PostgreSQL, and JavaScript, the project not only facilitates deep insights into market behavior but also empowers small investors with the resources needed to analyze returns, strategize effectively, and achieve financial growth. Despite certain limitations, such as the availability of historical market capitalization data, the project sets a strong foundation for future enhancements to support better investment strategies.

### Website Link 
https://ilknurtoptas.github.io/Tech_Stock_Tracker/
