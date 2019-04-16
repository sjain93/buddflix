from django.core.management.base import BaseCommand
from buddflix.models import Race, Category, Effect, Flavour
from .strain_API import effect_data, category_data, flavours_data, race_data

class Command(BaseCommand):
    args = 'lists of data from API'
    help = 'populates app db with Strain API data'

    def _create_models(self):
        print("Hello world")
        # loop through each function result and save each model
        eff = effect_data()
        cat = category_data()
        flav = flavours_data()
        rac = race_data()
        #populate database with simple models
        data_input= [cat, flav, rac]
        for list in data_input:
            if list == cat:
                for item in list:
                    tAdd = Category(name=item)
                    tAdd.save()
            elif list == flav:
                for item in list:
                    tAdd = Flavour(name=item)
                    tAdd.save()
            elif list == rac:
                for item in list:
                    tAdd = Race(name=item)
                    tAdd.save()
        #positive effects
        for element in eff[0]:
            newEffect = Effect(name=element, category= Category.objects.get(name="postive"))
            newEffect.save()
        #negative effects
        for element in eff[1]:
            newEffect = Effect(name=element, category=Category.objects.get(name="negative"))
            newEffect.save()
        #medical effects
        for element in eff[2]:
            newEffect = Effect(name=element, category=Category.objects.get(name="medical"))
            newEffect.save()

    def handle(self, *args, **options):
        self._create_models()

