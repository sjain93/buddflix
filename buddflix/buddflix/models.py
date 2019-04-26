from django.db import models

class Race(models.Model):
    name = models.CharField(max_length=255)

class Category(models.Model):
    name = models.CharField(max_length=255)

class Effect(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='effects')

class Flavour(models.Model):
    name = models.CharField(max_length=255)

class Strain(models.Model):
    name = models.CharField(max_length=255)
    race = models.ForeignKey(Race, on_delete=models.CASCADE, related_name='strains')
    effects = models.ManyToManyField(Effect, related_name='strains')
    flavours = models.ManyToManyField(Flavour, related_name='strains')

class Genre(models.Model):
    name = models.CharField(max_length=255)
    tmdb_id = models.IntegerField()
    race = models.ForeignKey(Race, on_delete=models.CASCADE, related_name='genres')
