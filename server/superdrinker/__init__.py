from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from superdrinker import database

app = Flask(__name__)

@app.route('/')
def hello():
    return "hello"

@app.route('/api/bar', methods = ["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route('/api/bar/<name>', methods = ['GET'])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/beer', methods = ['GET'])
def get_beers():
    try:
        return jsonify(database.get_beers())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers_cheaper_than', methods = ['POST'])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_beers(max_price))

@app.route('/api/menu/<name>', methods = ['GET'])
def get_menu(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name", 404)
        return jsonify(database.get_bar_menu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
'''
@app.route('/api/beer-manf', methods = ['GET'])
def get_beer_manufacturers():
    try:
        return jsonify(database.get_beer_manufacturers(None))
    except Exception as e:
        return make_response(str(e), 500)
'''

@app.route('/api/beer-manf/<beer>', methods = ["GET"])
def get_manf_making(beer):
    try:
        return jsonify(database.get_beer_manf(beer))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker', methods = ['GET'])
def get_drinkers():
    try:
        return jsonify(database.get_drinkers())
    except Exception as e:
        return make_response(str(e), 500)


# get a list of bar given a drinker
@app.route('/api/drinker/<drinkerName>/bar', methods = ['GET'])
def drinker_bar_spent(drinkerName):
    try:
        if drinkerName is None:
            raise ValueError('drinker not specified')
        drinker = database.find_drinker(drinkerName)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(database.drinker_bar_spent(drinkerName))     
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

################################################################
# given a bar that the drinker visited, list the transaction date (noice: can return an empty list)
@app.route('/api/drinker/<drinkerName>/bar/<barName>', methods = ['GET'])
def drinker_bar_trans(drinkerName, barName):
    try:
        if drinkerName is None or barName is None:
            raise ValueError('drinker or bar not specified')
        drinker = database.find_drinker(drinkerName)
        bar = database.find_bar(barName)
        if drinker is None or barName is None:
            return make_response("No drinker or bar found with the given name.", 404)
        return jsonify(database.drinker_bar_trans(drinkerName,barName))     
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
        
@app.route('/api/drinker/<drinkerName>/date', methods = ['GET'])
def drinker_date_spent(drinkerName):
    try:
        if drinkerName is None:
            raise ValueError('drinker not specified')
        drinker = database.find_drinker(drinkerName)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(database.drinker_date_spent(drinkerName))     
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

# New.  Get the drinker's week spent
@app.route('/api/drinker/<drinkerName>/byWeek', methods = ['GET'])
def drinker_week_spent(drinkerName):
    try:
        if drinkerName is None:
            raise ValueError('drinker not specified')
        drinker = database.find_drinker(drinkerName)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(database.drinker_week_spent(drinkerName))     
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)



# New. Get the drinker's monthly spent
@app.route('/api/drinker/<drinkerName>/byMonth', methods = ['GET'])
def drinker_month_spent(drinkerName):
    try:
        if drinkerName is None:
            raise ValueError('drinker not specified')
        drinker = database.find_drinker(drinkerName)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(database.drinker_month_spent(drinkerName))     
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker/<drinkerName>/topBeer', methods = ['GET'])
def drinker_to_item(drinkerName):
    try:
        if drinkerName is None:
            raise ValueError('drinker not specified')
        drinker = database.find_drinker(drinkerName)
        if drinker is None:
            return make_response('No drinker found with the given name.', 404)
        return jsonify(database.drinker_to_item(drinkerName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/beer/<beerName>/topBars', methods = ['GET'])
def beer_frequent_bar(beerName):
    try:
        if beerName is None:
            raise ValueError('item not specified')
        beer = database.find_item(beerName)
        if beer is None:
            return make_response('No item found with the given name', 404)
        return jsonify(database.beer_frequent_bar(beerName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/beer/<beerName>/topDrinkers', methods = ['GET'])
def beer_frequent_drinker(beerName):
    try:
        if beerName is None:
            raise ValueError('item not specified')
        beer = database.find_item(beerName)
        if beer is None:
            return make_response('No item found with the given name', 404)
        return jsonify(database.beer_frequent_drinker(beerName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

# this function return the beer sell by hour
@app.route('/api/beer/<beerName>/byTime', methods = ['GET'])
def beer_by_time(beerName):
    try:
        if beerName is None:
            raise ValueError('beer not specified')
        beer = database.find_item(beerName)
        if beer is None:
            return make_response('No beer found with the given name', 404)
        return jsonify(database.beer_by_time(beerName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

# this function return the beer sell by weekdays
@app.route('/api/beer/<beerName>/byWeek', methods = ['GET'])
def beer_by_week(beerName):
    try:
        if beerName is None:
            raise ValueError('beer not specified')
        beer = database.find_item(beerName)
        if beer is None:
            return make_response('No beer found with the given name', 404)
        return jsonify(database.beer_by_week(beerName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)



@app.route('/api/beer/<beerName>/sellRecord', methods = ['GET'])
def beer_sell_record(beerName):
    try:
        if beerName is None:
            raise ValueError('item not specified')
        beer = database.find_item(beerName)
        if beer is None:
            return make_response('No item found with the given name', 404)
        return jsonify(database.beer_sell_record(beerName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bar/<barName>/topDrinkers', methods = ['GET'])
def bar_top_drinker(barName):
    try:
        if barName is None:
            raise ValueError('bar not specified')
        bar = database.find_bar(barName)
        if bar is None:
            return make_response('No bar found with the given name', 404)
        return jsonify(database.bar_top_drinker(barName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bar/<barName>/topBeers', methods = ['GET'])
def bar_top_item(barName):
    try:
        if barName is None:
            raise ValueError('bar not specified')
        bar = database.find_bar(barName)
        if bar is None:
            return make_response('No bar found with the given name', 404)
        return jsonify(database.bar_top_item(barName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bar/<barName>/topManufacture', methods = ['GET'])
def bar_top_manf(barName):
    try:
        if barName is None:
            raise ValueError('bar not specified')
        bar = database.find_bar(barName)
        if bar is None:
            return make_response('No bar found with the given name', 404)
        return jsonify(database.bar_top_manf(barName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bar/<barName>/byWeek', methods = ['GET'])
def bar_by_week(barName):
    try:
        if barName is None:
            raise ValueError('bar not specified')
        bar = database.find_bar(barName)
        if bar is None:
            return make_response('No bar found with the given name', 404)
        return jsonify(database.bar_by_week(barName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)



@app.route('/api/bar/<barName>/byTime', methods = ['GET'])
def bar_by_time(barName):
    try:
        if barName is None:
            raise ValueError('bar not specified')
        bar = database.find_bar(barName)
        if bar is None:
            return make_response('No bar found with the given name', 404)
        return jsonify(database.bar_by_time(barName))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)



# get transaction details
@app.route('/api/trans/<transid>', methods = ['GET'])
def trans_detail(transid):
    try:
        if transid is None:
            raise ValueError('id not specified')
        id = database.find_id(transid)
        if id is None:
            return make_response('No id found with the given number', 404)
        return jsonify(database.trans_detail(transid))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)



@app.route('/api/mod',methods = ['POST'])
def post_hello():
    some_json = json.loads(request.data)
    print(some_json)
    key = some_json['key']


    return jsonify({'sent':key + key})

@app.route('/api/mod/exeqry',methods = ['POST'])
def exe_qry():
    jnode = json.loads(request.data)
    qry = jnode['query']
    return jsonify({'accept': database.exe_qry(qry)})

@app.route('/api/mod/exeqryj',methods = ['POST'])
def exe_qryj():
    jnode = json.loads(request.data)

    qry = jnode['query']

    return jsonify(database.exe_qryj(qry))

@app.route('/api/bar/<barName>/maketrans' ,methods = ['POST'])
def make_trans(barName):
    jnode = json.loads(request.data)
    Bar = jnode['Bar']
    Drinker = jnode['Drinker']
    TransID = jnode['TransID']
    Tips = jnode['Tips']
    Date = jnode['Date']
    Time = jnode['Time']

    
    return jsonify({'msg':database.customize(Bar, Drinker, TransID, Tips, Date, Time)})



@app.route('/api/city' ,methods = ['GET'])
def get_city():
    return jsonify(database.get_city())


@app.route('/api/freq' ,methods = ['GET'])
def get_freq():
    return jsonify(database.get_Frequent())

@app.route('/api/include' ,methods = ['GET'])
def get_include():
    return jsonify(database.get_Include())

@app.route('/api/likes' ,methods = ['GET'])
def get_like():
    return jsonify(database.get_Like())

@app.route('/api/locate' ,methods = ['GET'])
def get_locate():
    return jsonify(database.get_Locate())

@app.route('/api/make' ,methods = ['GET'])
def get_make():
    return jsonify(database.get_Make())

@app.route('/api/sells' ,methods = ['GET'])
def get_sell():
    return jsonify(database.get_Sells())

@app.route('/api/trans' ,methods = ['GET'])
def get_trans():
    return jsonify(database.get_Trans())
