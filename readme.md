# BarBeerDrinker
> This Project is done by Boyang Fu and Jianan Yu with equal contribution, the website can be seen by visiting: 

https://immense-sea-54918.herokuapp.com/static/index.html

## Description

Our project can be separated into three main parts:
### Data Generation
Our data generation is based on the schema we designed as following:
Drinker[DrinkerName, city, phone, address]
City[CityName , State, Tax]
Bar[BarName, OpenTime, CloseTime] 
Transaction[TransID, Tips]
Item[ItemName, Category, Manufactory]
Make[DrinkerName, TransID, BarName, Date]
Include[TransID, ItemName, price]
Like[DrinkerName, ItemName]
Locate[BarName, CityName] 
Sells[BarName, ItemName, Price]
Frequent[DrinkerName, BarName]

To make our data patterns be more realistic, we force the following constraints:
1) Transactions/bills cannot be issued at times when the given bar is closed
2) Drinkers cannot frequent bars in different state
3) For every two beers, b1 and b2, different bars may charge differently for b1 and b2 but b1 should either be less expensive than b2 in ALL bars or more expensive than b2 in ALL bars.  Cannot be the case that in one bar Corona is more expensive than Bud and in another Bud is more expensive than Corona.  But Corona may be more expensive than Bud in one bar,  and have the same price as Bud in another.

### Backend Database Implementation:
We setup an AWS account and connect RDS with MySQL. Then we load our generated data and set up constraints, triggers, primary keys and foreign keys to satisfy the schema we created above.  

### Frontend Website Display:
a) DRINKER PAGE: Given a drinker, show all his/her transactions ordered by time and grouped by different bars.  Show bar graphs of beers s/he orders the most. Also, bar graph of his/her spending in different bars, on different dates/weeks/months.

b) BAR PAGE: Given a bar, show bar graphs – 1) for  top drinkers who are largest spenders, 2) for beers which are most popular and 3) for manufacturers who sell the most beers. Demonstrate time distribution of sales, show what are the busiest periods of the day and of the week. Also have a way to add a new transaction for a given date etc.

c) BEER PAGE: Given a beer – show bars where this beer sells the most (again only top), show also drinkers who are the biggest consumers of this beer as well as time distribution of when this beer sells the most. 

d) SQL QUERY INTERFACE:  Provide a box where we can type in sql query and get them evaluated on your database. Of course we will have to know the scheme (which will be part of your submission).

FRONT END – UPDATES/DELETIONS/INSERTIONS:  Allow end user to modify every table in your databases. 
Have MODIFICATION page, with one box for each table. If update is not accepted – provide the feedback message “violates foreign key” etc.



