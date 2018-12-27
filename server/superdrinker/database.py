from sqlalchemy import create_engine
from sqlalchemy import sql

from superdrinker import config
import datetime
import pandas as pd
from sqlalchemy.exc import SQLAlchemyError

engine = create_engine(config.database_uri)

# for \api\bar
def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT Name, Open_Time, Close_Time FROM Bar;")
        return [dict(row) for row in rs]

def find_bar(name):
    with engine.connect() as con:
        query = sql.text("select Name, Open_Time, Close_Time from Bar where Name = :name;")
        rs = con.execute(query, name = name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_item(name):
    with engine.connect() as con:
        query = sql.text("select * from Item where Item = :name")
        rs = con.execute(query, name = name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_drinker(name):
    with engine.connect() as con:
        query = sql.text("select * from Drinker where Name = :name")
        rs = con.execute(query, name = name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_id(id):
    with engine.connect() as con:
        query = sql.text("select * from Transaction where ID = :id")
        rs = con.execute(query, id = id)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def filter_beers(max_price):
    with engine.connect() as con:
        query = sql.text(
            "select * from sells where Price < :max_price;"
        )
        rs = con.execute(query, max_price = max_price)
        results = [dict(row) for row in rs]
        for r in results:
            r['Price'] = float(r['Price'])
        return results


def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'select a.Bar, a.Item, a.Price, b.manf \
            from Sells as a \
            join Item as b \
            on a.Item = b.Item \
            where a.Bar = :bar; \
        ')
        rs = con.execute(query, bar = bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['Price'] = float(results[i]['Price'])
        return results

def get_beers():
    with engine.connect() as con:
        rs = con.execute('select * from Item')
        return [dict(row) for row in rs]
# def get_bar_menu(bar_name):
#     with engine.connect() as con:

def get_beer_manf(beer):
    with engine.connect() as con:
        query = sql.text(
            'select manf from Item where Item = :beer'
        )
        rs = con.execute(query, beer = beer)
        result = rs.first()
        if result is None:
            return None
        return str(result)


# /api/drinker/<drinkrName>/TopBeer
# select the item that a drinker purchased order by descending order
# notice: there may have drinker who has no transaction
def drinker_to_item(drinkerName):
    with engine.connect() as con:
        query = sql.text(
            'select I.Item, sum(I.Quantity) as Num \
            from Include I \
            where I.TransID in \
            (select M.transID \
            from Make M \
            where M.DrinkerName = :drinkerName ) \
            group by I.Item \
            order by Num desc'
        )
        rs = con.execute(query, drinkerName = drinkerName)
        result =  [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Num'] = int(result[i]['Num'])
        return result


# /api/drinker
def get_drinkers():
    with engine.connect() as con:
        rs = con.execute('select * from Drinker')
        return [dict(row) for row in rs]



# this function will get the corresponding bar, sorted time  
# and transID

def get_drinker_trans(DrinkerName):
    with engine.connect() as con:
        query = sql.text(
            'select M.TransID, M.BarName, M.Date, M.Time \
            from Make M \
            where M.DrinkerName = :DrinkerName \
            order by str_to_date(M.Date, \'%m/%d/%Y\' ) \
            '
        )

        rs = con.execute(query, DrinkerName = DrinkerName)
        result = rs.first()
        if result is None:
            return None
        return [dict(row) for row in rs]


#\api\drinker\<drinkerName>\bar\<barName> (transID, time, ID_spend)
#this function try to get the spent of a particular drinker at 
# a particular bar
def drinker_bar_spent(drinker):
    with engine.connect() as con:
        query = sql.text(
            'select M.BarName, sum( I.Price * I.Quantity) as Spent \
            from Make M right join Include I \
            on M.TransID = I.TransID \
            where M.DrinkerName = :drinker \
            group by M.BarName'
        )
        rs = con.execute(query, drinker = drinker)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Spent'] = float(result[i]['Spent'])
        return result


# get the drinker's daily spent
def drinker_date_spent(drinker):
    with engine.connect() as con:
        query = sql.text(
            'select S.Date, sum(S.Spent * T.Tips) as Spent \
            from (select M.TransID, M.Date, (I.Price * I.Quantity) as Spent\
            from Make M right join Include I \
            on I.TransID = M.TransID \
            where M.DrinkerName = :drinker) \
            as S left join Transaction T on S.TransID = T.ID \
            group by S.Date \
            order by Spent desc'
        )
        rs = con.execute(query, drinker = drinker)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Spent'] = float(result[i]['Spent'])
        return result

# get the drinker's week spent
def drinker_week_spent(drinker):
    with engine.connect() as con:
        query = sql.text(
            'select S.Date, sum(S.Spent * T.Tips) as Spent \
            from (select M.TransID, M.Date, (I.Price * I.Quantity) as Spent\
            from Make M right join Include I \
            on I.TransID = M.TransID \
            where M.DrinkerName = :drinker) \
            as S left join Transaction T on S.TransID = T.ID \
            group by S.Date \
            order by Spent desc'
        )
        rs = con.execute(query, drinker = drinker)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            date = result[i]['Date'].split('/')
            # result[i]['WeekDay'] = int(datetime.date(date[2], date[0], date[1]).weekday())
            result[i]['WeekDay'] = int(datetime.date(int(date[2]), int(date[0]), int(date[1])).weekday())
        result = pd.DataFrame.from_dict(result)
        result = result[['WeekDay', 'Spent']]
        result = pd.DataFrame(result.groupby(['WeekDay']).sum()).reset_index()
        result['WeekDay'] = result['WeekDay'].astype(str)
        result['Spent'] = result['Spent'].astype(str)
        result = result[['WeekDay', 'Spent']]
        result = result.to_dict('records')
        return result

        # get the drinker's monthly spent
def drinker_month_spent(drinker):
    with engine.connect() as con:
        query = sql.text(
            'select S.Date, sum(S.Spent * T.Tips) as Spent \
            from (select M.TransID, M.Date, (I.Price * I.Quantity) as Spent\
            from Make M right join Include I \
            on I.TransID = M.TransID \
            where M.DrinkerName = :drinker) \
            as S left join Transaction T on S.TransID = T.ID \
            group by S.Date \
            order by Spent desc'
        )
        rs = con.execute(query, drinker = drinker)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            date = result[i]['Date'].split('/')
            result[i]['Month'] = date[0]
        result = pd.DataFrame.from_dict(result)
        result = result[['Month', 'Spent']]
        result = pd.DataFrame(result.groupby(['Month']).sum()).reset_index()
        result['Month'] = result['Month'].astype(int)
        result = result.sort_values(['Month'])
        result['Month'] = result['Month'].astype(str)
        result['Spent'] = result['Spent'].astype(str)
        result = result[['Month', 'Spent']]
        result = result.to_dict('records')
        return result

# this function find the bar where the beer sells the most
def beer_frequent_bar(beer):
    with engine.connect() as con:
        query = sql.text(
            'select M.BarName, count(M.BarName) as Times \
            from Make M right join Include I on M.TransID = I.TransID \
            where I.Item = :beer \
            group by M.BarName \
            order by Times desc'
        )
        rs = con.execute(query, beer= beer)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Times'] = float(result[i]['Times'])
        return result


# this function find the drinker for whom the beer sells the most
def beer_frequent_drinker(beer):
    with engine.connect() as con:
        query = sql.text(
            'select M.DrinkerName, count(M.DrinkerName) as Times \
            from Make M right join Include I on M.TransID = I.TransID \
            where I.Item = :beer \
            group by M.DrinkerName \
            order by Times desc'
        )
        rs = con.execute(query, beer= beer)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Times'] = float(result[i]['Times'])
        return result

        # \api\beer\<beerName>\byTime
# This function return the sellRecord information based on date
def beer_by_time(beer):
    with engine.connect() as con:
        query = sql.text(
            'select M.Time, I.Quantity \
            from Make M right join Include I on M.TransID = I.TransID \
            where I.Item = :beer'
        )
        rs = con.execute(query, beer = beer)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            time = result[i]['Time'].split(':')
            # result[i]['WeekDay'] = int(datetime.date(date[2], date[0], date[1]).weekday())
            result[i]['Hour'] = time[0]
        result = pd.DataFrame.from_dict(result)
        result = result[['Hour', 'Quantity']]
        result = pd.DataFrame(result.groupby(['Hour']).sum()).reset_index()
        result['Hour'] = result['Hour'].astype(str)
        result['TransNum'] = result['Quantity'].astype(str)
        result = result[['Hour', 'TransNum']]
        result = result.to_dict('records')
        return result
        

# \api\beer\<beerName>\byWeek
# This function return the sellRecord information based on date
def beer_by_week(beer):
    with engine.connect() as con:
        query = sql.text(
            'select M.Date, I.Quantity \
            from Make M right join Include I on M.TransID = I.TransID \
            where I.Item = :beer'
        )
        rs = con.execute(query, beer = beer)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            date = result[i]['Date'].split('/')
            # result[i]['WeekDay'] = int(datetime.date(date[2], date[0], date[1]).weekday())
            result[i]['WeekDay'] = int(datetime.date(int(date[2]), int(date[0]), int(date[1])).weekday())
        result = pd.DataFrame.from_dict(result)
        result = result[['WeekDay', 'Quantity']]
        result = pd.DataFrame(result.groupby(['WeekDay']).sum()).reset_index()
        result['WeekDay'] = result['WeekDay'].astype(str)
        result['TransNum'] = result['Quantity'].astype(str)
        result = result[['WeekDay', 'TransNum']]
        result = result.to_dict('records')
        return result


# \api\beer\<beerName>\sellRecord
# This function return the sellRecord information based on date
def beer_sell_record(beer):
    with engine.connect() as con:
        query = sql.text(
            'select M.Date, count(M.Time) as Amount \
            from Make M right join Include I on M.TransID = I.TransID \
            where I.Item = :beer \
            group by M.Date \
            order by str_to_date(M.Date, \'%m/%d/%Y\' )'
        )
        rs = con.execute(query, beer = beer)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Amount'] = int(result[i]['Amount'])
        return result

#\api\bar\<barName>\topDrinkers
# this function get the topDrinker name, before tips spent and after tips spent
def bar_top_drinker(bar):
    with engine.connect() as con:
        query = sql.text(
            'select S.DrinkerName, sum(S.Spent) as Before_Tips,  sum(S.Spent * (1 + T.Tips)) as After_Tips \
            from  (select M.DrinkerName, (I.Quantity * I.Price) as Spent, M.TransID \
            from Make M right join Include I on M.TransID = I.TransID \
            where M.BarName = :bar) as S \
            left join Transaction T on S.TransID = T.ID \
            group by S.DrinkerName \
            order by After_Tips desc'
        )
        rs = con.execute(query, bar = bar)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Before_Tips'] = float(result[i]['Before_Tips'])
            result[i]['After_Tips'] = float(result[i]['After_Tips'])
        return result

# \api\bar\<barName>\topBeers
# this function return the Item and corresponding amount sold in a particular bar in descending order
def bar_top_item(bar):
    with engine.connect() as con:
        query = sql.text(
            'select I.Item, count(I.Item) as Amount \
            from Include I left join Make M on I.TransID = M.TransID \
            where M.BarName = :bar  \
            group by I.Item  \
            order by Amount desc'
        )
        rs = con.execute(query, bar = bar)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Amount'] = float(result[i]['Amount'])
        return result

# \api\bar\<barName>\topManufacture
def bar_top_manf(bar):
    with engine.connect() as con:
        query = sql.text(
            'select S.manf, count(S.manf) as Amount \
            from (select It.Item, It.manf, Inc.TransID \
            from Item It right join Include Inc on It.Item = Inc.Item) \
            as S left join Make M on S.TransID = M.TransID \
            where M.BarName = :bar \
            group by S.manf \
            order by Amount desc'
        )
        rs = con.execute(query, bar = bar)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            result[i]['Amount'] = float(result[i]['Amount'])
        return result


# this function return the number of transaction made for each weekday for a particular bar
# \api\bar\<barName>\byWeek
def bar_by_week(bar):
    with engine.connect() as con:
        query = sql.text(
            'SELECT M.Date \
            from Make M \
            where M.BarName = :bar'
        )
        rs = con.execute(query, bar = bar)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            date = result[i]['Date'].split('/')
            # result[i]['WeekDay'] = int(datetime.date(date[2], date[0], date[1]).weekday())
            result[i]['WeekDay'] = int(datetime.date(int(date[2]), int(date[0]), int(date[1])).weekday())
        result = pd.DataFrame.from_dict(result)
        result = pd.DataFrame(result.groupby(['WeekDay']).count()).reset_index()
        result['WeekDay'] = result['WeekDay'].astype(str)
        result['TransNum'] = result['Date'].astype(str)
        result = result[['WeekDay', 'TransNum']]
        result = result.to_dict('records')
        return result


# @app.route('/api/bar/<barName>/byTime', methods = ['GET'])
# this function return the number of transactions made for a particular time period
def bar_by_time(bar):
    with engine.connect() as con:
        query = sql.text(
            'SELECT M.Time \
            from Make M \
            where M.BarName = :bar'
        )
        rs = con.execute(query, bar = bar)
        result = [dict(row) for row in rs]
        for i, _ in enumerate(result):
            time = result[i]['Time'].split(':')
            # result[i]['WeekDay'] = int(datetime.date(date[2], date[0], date[1]).weekday())
            result[i]['Hour'] = time[0]
        result = pd.DataFrame.from_dict(result)
        result = pd.DataFrame(result.groupby(['Hour']).count()).reset_index()
        result['Hour'] = result['Hour'].astype(str)
        result['TransNum'] = result['Time'].astype(str)
        result = result[['Hour', 'TransNum']]
        result = result.to_dict('records')
        return result

# get the list of bars where the drinker made transaction
def drinker_to_bar(drinker):
    with engine.connect() as con:
        query = sql.text(
            'SELECT distinct M.BarName \
            from Make M \
            where M.DrinkerName = :drinker'
        )
        rs = con.execute(query, drinker = drinker)
        result = [dict(row) for row in rs]
        return result



# given a drinker and his visited bar, show trasaction ordered by time
def drinker_bar_trans(drinker, bar):
    with engine.connect() as con:
        query = sql.text(
            'SELECT M.TransID, M.BarName, M.Date, M.Time \
            from Make M \
            where M.DrinkerName = :drinker and M.BarName = :bar \
            order by str_to_date(M.Date, \'%m/%d/%Y\' ), \
            str_to_date(M.Time, \'%h:%i\') desc '
        )
        rs = con.execute(query, drinker = drinker, bar = bar)
        result = [dict(row) for row in rs]
        return result

# get the transaction detail
def trans_detail(id):
    with engine.connect() as con:
        query = sql.text(
            'SELECT M.DrinkerName, M.BarName, M.Date, M.Time, I.Item, I.Price, I.Quantity \
            from Make M right join Include I on M.TransID = I.TransID \
            where I.TransID = :id'
        )
        rs = con.execute(query, id = id)
        result = [dict(row) for row in rs]
        return result

def get_city():
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM City;")
        return [dict(row) for row in rs]

def get_Frequent():
    with engine.connect() as con:
        rs = con.execute('select * from Frequent')
        return [dict(row) for row in rs]

def get_Include():
    with engine.connect() as con:
        rs = con.execute('select * from Include')
        return [dict(row) for row in rs]

def get_Like():
    with engine.connect() as con:
        rs = con.execute('select * from Likes')
        return [dict(row) for row in rs]

def get_Locate():
    with engine.connect() as con:
        rs = con.execute('select * from Locate')
        return [dict(row) for row in rs]


def get_Make():
    with engine.connect() as con:
        rs = con.execute('select * from Make')
        return [dict(row) for row in rs]

def get_Sells():
    with engine.connect() as con:
        rs = con.execute('select * from Sells')
        return [dict(row) for row in rs]

def get_Trans():
    with engine.connect() as con:
        rs = con.execute('select * from Transaction')
        return [dict(row) for row in rs]

def exe_qry(query):
    with engine.connect() as con:
        try:
            con.execute(query)
            return 'Success'
        except SQLAlchemyError as e:
            return str(e)

def exe_qryj(query):
    with engine.connect() as con:
        try:
            rs = con.execute(query)
            return [dict(row) for row in rs]
            
        except SQLAlchemyError as e:
            return str(e)

def customize(Bar, Drinker, TransID, Tips, Date, Time):
    with engine.connect() as con:
        try:
            query1 = sql.text(
                'insert into Transaction(ID, Tips)\
                values(:TransID, :Tips)'
            )
            rs = con.execute(query1, TransID = TransID, Tips = Tips)
        except SQLAlchemyError as e:
            return str(e)
        try:
            query2 = sql.text(
                'insert into Make(TransID, DrinkerName, BarName, Date, \
                Time) values(:TransID, :Drinker, :Bar, :Date, :Time)'
            )
            rs = con.execute(query2, TransID = TransID, Drinker = Drinker, Bar = Bar, Date = Date, Time = Time)
            return 'Success'
        except SQLAlchemyError as e:
            return str(e)
