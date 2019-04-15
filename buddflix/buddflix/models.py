from django.db import models
from django.contrib.auth.models import User
import datetime

class Type(models.Model):
    name = models.CharField(max_length=255)

class Category(models.Model):
    name = models.CharField(max_length=255)

class Effect(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='effects')

class Flavour(models.Model):
    name = models.CharField(max_length=255)

class Strain(models.Model):
    name = models.CharField(max_length=255)
    type = models.ForeignKey(
        Type, on_delete=models.CASCADE, related_name='strains')
    effects = models.ManyToManyField(Effect, related_name='strains')
    flavours = models.ManyToManyField(Flavour, related_name='strains')
