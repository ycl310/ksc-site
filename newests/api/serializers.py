# newests/api/serializers.py

from rest_framework import serializers

from newests.models import Newests


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newests
        fields = '__all__'