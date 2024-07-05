from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    class Roles(models.TextChoices):
        ENTREPRISE = 'ENTREPRISE', 'Entreprise'
        FREELANCE = 'FREELANCE', 'Freelance'

    class WorkTimes(models.TextChoices):
        HALF = 'HALF', 'Half'
        FULL = 'FULL', 'Full'

    role = models.CharField(choices=Roles.choices, max_length=20)
    social_reason = models.CharField(max_length=100, blank=True, null=True)
    skills = models.CharField(max_length=100, blank=True, null=True)
    location = models.CharField(max_length=100)
    notes = models.IntegerField(blank=True, null=True)
    work_time = models.CharField(choices=WorkTimes.choices, blank=True, null=True, max_length=20)
    business = models.ForeignKey('User', related_name='business_employees', blank=True, null=True, on_delete=models.SET_NULL)
    img = models.ImageField(blank=True, null=True, upload_to='images/')


class Activity(models.Model):
    title = models.CharField(max_length=100)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, related_name='activity', blank=True, null=True)



