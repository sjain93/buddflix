from tastypie.resources import ModelResource
from tastypie.authorization import ReadOnlyAuthorization
from buddflix.models import Race

class RaceResource(ModelResource):
    class Meta:
        queryset = Race.objects.all()
        resource_name = 'race'
        authorization = ReadOnlyAuthorization()

