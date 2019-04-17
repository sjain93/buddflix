from tastypie.resources import ModelResource
from tastypie.authorization import ReadOnlyAuthorization
from buddflix.models import Race, Effect, Category, Flavour, Strain

class RaceResource(ModelResource):
    class Meta:
        queryset = Race.objects.all()
        resource_name = 'race'
        authorization = ReadOnlyAuthorization()

class CategoryResource(ModelResource):
    class Meta:
        queryset = Category.objects.all()
        resource_name = 'category'
        authorization = ReadOnlyAuthorization()

class FlavourResource(ModelResource):
    class Meta:
        queryset = Flavour.objects.all()
        resource_name = 'flavour'
        authorization = ReadOnlyAuthorization()


# class EffectResource(ModelResource):
#     related = effects.ForeignKey(CategoryResource, full=true)
#     class Meta:
#         queryset = Effect.objects.all()
#         resource_name = 'effect'
#         authorization = ReadOnlyAuthorization()



