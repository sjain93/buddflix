from django.http import JsonResponse
from buddflix.models import Race, Category, Effect, Strain, Flavour
import requests
import json

def get_races(request):
    races = Race.objects.all().order_by('pk')
    raceList = []
    for race in races:
        raceList.append({'id': race.pk, 'name': race.name})
    return JsonResponse({'races': raceList})


def get_flavours(request):
    flavours = Flavour.objects.all().order_by('pk')
    flavList = []
    for flavour in flavours:
        flavList.append({'id': flavour.pk, 'name': flavour.name})
    return JsonResponse({'flavours': flavList})


def get_categories(request):
    categories = Category.objects.all().order_by('pk')
    catList = []
    for cat in categories:
        catList.append({'id': cat.pk, 'name': cat.name})
    return JsonResponse({'categories': catList})


def get_effects(request, type=None):
    if type in ['positive','negative','medical']:
        typeId = Category.objects.get(name=type)
        effects = Effect.objects.filter(category=typeId)
    elif type is not None and type not in ['positive','negative','medical']:
        return JsonResponse({"resp": 404})
    else:
        effects = Effect.objects.all().order_by('pk')
    effList = []
    for eff in effects:
        effList.append({'id': eff.pk, 'name': eff.name, 'category': eff.category.name})
    return JsonResponse({'effects': effList})

def get_all_strains(request):
    strains = Strain.objects.all().order_by('pk')
    strList = []
    for strain in strains:
        effects = strain.effects.all()
        effList = {'positive': [], 'negative': [], 'medical': []}
        for effect in effects:
            if effect.category.name == 'positive':
                effList['positive'].append(effect.name)
            elif effect.category.name == 'negative':
                effList['negative'].append(effect.name)
            elif effect.category.name == 'medical':
                effList['medical'].append(effect.name)
        flavours = strain.flavours.all()
        flavList = []
        for flavour in flavours:
            flavList.append(flavour.name)
        strList.append({'id': strain.pk, 'name': strain.name, 'race': strain.race.name, 'effects': effList, 'flavours': flavList})
    return JsonResponse({'strains': strList})