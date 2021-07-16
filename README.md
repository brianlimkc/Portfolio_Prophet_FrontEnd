# Project 4 - Portfolio Prophet



## The Problem



## The Solution

## The Application

### Database

![ERD](https://i.imgur.com/LU7M3Q3.png)

We used a relational database model for our application which was built via Django. 

Starting from the left, we have a table for our Users, these will store their credentials such as username, email and password which ties to a uuid (generated automatically on user registration). Password is hashed when it is stored.

For every User, we intend to allow them to store multiple Portfolios. Portfolios allow segregation of User's Stocks by their Portfolios and is meant to track Stocks that the User owns and how much growth it has.

Each User will also be able to track certain Stocks in their Watchlist. Watchlists are meant to display Stocks that User wants to monitor but not yet buy/sell.

To allow identical info for stock data, across the different table, we store Stock info pulled from the api into the Stock table. The Stock table is linked to the Portfolio_Stock, Watchlist, Stocks_Tracked, Historical_Stock_Data and Recommendation tables

Due to the Prophet algorithm requiring historical data to run forecasts, we will store the data in Historical_Stock_Data for the algorithm to run on. Each time the app is loaded, only the new stock data is pulled to reduce loading time. 

Once the forecast is made from Prophet, we store the recommendation into the Recommendation table, as the algorithm requires time to process, we only schedule it to run daily and update this table. When displaying the Recommendation to the user, we will simply pull the data from this table which will increase the speed of loading.

### Design



### Tech Used

- React
- Django

## Acknowledgement

### Team Members

### Credits

