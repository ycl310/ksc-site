from django.db import models

# Create your models here.

class Newests(models.Model):
	news = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	image = models.CharField(max_length=500)

	def __str__(self):
		return self.news