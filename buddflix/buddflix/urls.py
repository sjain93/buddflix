"""buddflix URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path
from buddflix.resources import RaceResource, CategoryResource, FlavourResource, EffectResource
from buddflix.views import get_races, get_categories, get_effects, get_all_strains, get_flavours

race_resource = RaceResource()
category_resource = CategoryResource()
flavour_resource = FlavourResource()
effect_resource = EffectResource()

urlpatterns = [
    url('admin/', admin.site.urls),
    url('api/', include(race_resource.urls)),
    url('api/', include(category_resource.urls)),
    url('api/', include(flavour_resource.urls)),
    url('api/', include(effect_resource.urls)),
    path('races', get_races),
    path('categories', get_categories),
    path('effects', get_effects),
    path('effects/<str:type>', get_effects),
    path('strains', get_all_strains),
    path('flavours', get_flavours),
]
