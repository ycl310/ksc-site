# todo/admin.py

from django.contrib import admin
from .models import Newests # add this

class NewestsAdmin(admin.ModelAdmin):  # add this
  list_display = ('news', 'created_at', 'image') # add this

# Register your models here.
admin.site.register(Newests, NewestsAdmin) # add this