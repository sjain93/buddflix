from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from tastypie import fields
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

class EffectResource(ModelResource):
    category = fields.ForeignKey(
        CategoryResource, attribute='category', null=True, full=True)
    class Meta:
        queryset = Effect.objects.all()
        resource_name = 'effect'
        authorization = ReadOnlyAuthorization()
    
class StrainResource(ModelResource):
    race = fields.ForeignKey(
        RaceResource, attribute='race', null=True, full=True)
    effects = fields.ToManyField(
        'buddflix.resources.EffectResource',
        'effects',
        null=True,
        full=True
    )
    flavours = fields.ToManyField(
        'buddflix.resources.FlavourResource', 'flavours', null=True, full=True)
    class Meta:
        queryset = Strain.objects.all()
        filtering = {
            'name': ALL_WITH_RELATIONS,
            'race': ALL_WITH_RELATIONS,
            'effects': ALL_WITH_RELATIONS,
            'flavours': ALL_WITH_RELATIONS
        }
        resource_name = 'strain'
        authorization = ReadOnlyAuthorization()
    
    def dehydrate(self, bundle):
        # print(bundle.data['effects'][0].data['resource_uri'])
        effectsArray = []
        flavoursArray = []
        for b in bundle.data['effects']:
            effectsArray.append(b.data['name'])
        bundle.data['effects']= effectsArray
        for b in bundle.data['flavours']:
            flavoursArray.append(b.data['name'])
        bundle.data['flavours']=flavoursArray
        return bundle

