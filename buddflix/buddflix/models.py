from django.db import models
from django.contrib.auth.models import User
import datetime

class Type(models.Model):
    name = models.CharField(max_length=255)

class Strain(models.Model):
    name = models.CharField(max_length=255)
    type = models.ForeignKey(
        Type, on_delete=models.CASCADE, related_name='types')

class Category(models.Model):
    name = models.CharField(max_length=255)

class Effect(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='categories')

class StrainToEffect(models.Model):
    strain = models.ForeignKey(Strain, on_delete=models.CASCADE, related_name='strains')
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE, related_name='effects')

class Flavour(models.Model):
    name = models.CharField(max_length=255)

class StrainToEffect(models.Model):
    strain = models.ForeignKey(
        Strain, on_delete=models.CASCADE, related_name='strains')
    effect = models.ForeignKey(
        Effect, on_delete=models.CASCADE, related_name='effects')

class StrainToFlavour(models.Model):
    strain = models.ForeignKey(
        Strain, on_delete=models.CASCADE, related_name='strains')
    flavour = models.ForeignKey(
        Flavour, on_delete=models.CASCADE, related_name='flavours')
