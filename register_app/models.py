from django.db import models

# Create your models here.
class Person(models.Model):
    username = models.CharField(max_length=150)
    email = models.EmailField(max_length=250)
    password = models.CharField(max_length=150)
    confirmpassword = models.CharField(max_length=150)

    def __str__(self):
        return f"{self.username}"