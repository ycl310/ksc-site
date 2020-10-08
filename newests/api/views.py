# newests/api/views.py

from rest_framework import viewsets

from .serializers import NewsSerializer
from newests.models import Newests


class NewsViewSet(viewsets.ModelViewSet):
    queryset = Newests.objects.all()
    serializer_class = NewsSerializer