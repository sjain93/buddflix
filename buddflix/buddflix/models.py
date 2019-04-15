from django.db import models
from django.contrib.auth.models import User
import datetime

class Type(models.Model):
    name = models.CharField(max_length=255)

class Strain(models.Model):
    name = models.CharField(max_length=255)
    type = models.ForeignKey(
        Type, on_delete=models.CASCADE, related_name='strains')

class Category(models.Model):
    name = models.CharField(max_length=255)

class Effect(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='effects')

class StrainToEffect(models.Model):
    strain = models.ForeignKey(Strain, on_delete=models.CASCADE, related_name='strain_to_effect')
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE, related_name='strain_to_effect')

class Flavour(models.Model):
    name = models.CharField(max_length=255)

class StrainToFlavour(models.Model):
    strain = models.ForeignKey(Strain, on_delete=models.CASCADE, related_name='strain_to_flavours')
    flavour = models.ForeignKey(Flavour, on_delete=models.CASCADE, related_name='strain_to_flavours')
