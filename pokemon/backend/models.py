from django.db import models

class Pokemon(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    creation = models.DateTimeField(auto_now_add=True)