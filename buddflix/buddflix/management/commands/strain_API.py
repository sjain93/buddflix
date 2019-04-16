import json
import requests

# this file needs to reside inside a management folder in the django app

def effect_data():
    # Importing effects 
    res = requests.get("http://strainapi.evanbusse.com/znqfSrD/searchdata/effects")
    body = json.loads(res.content)
    positive_effect = []
    negative_effect = []
    medical = []

    for items in body:
        if items['type'] == 'positive':
            positive_effect.append(items['effect'])
        elif items['type'] == 'negative':
            negative_effect.append(items['effect'])
        elif items['type'] == 'medical':
            medical.append(items['effect'])

    type_set = [positive_effect, negative_effect, medical]
    return type_set

def category_data():
    # Importing type (positive, negative, medical)
    res = requests.get("http://strainapi.evanbusse.com/znqfSrD/searchdata/effects")
    body = json.loads(res.content)
    category_seed = []

    for items in body:
        if items['type'] not in category_seed:
            category_seed.append(items['type'])
    return category_seed

print(category_data())

def flavours_data():
      # Importing flavours data already in Array
    res = requests.get("http://strainapi.evanbusse.com/znqfSrD/searchdata/flavors")
    body = json.loads(res.content)
    flavours_seed = body
    return flavours_seed

def race_data():
    race_seed = ['Sativa','Indica','Hybrid']
    return race_seed
