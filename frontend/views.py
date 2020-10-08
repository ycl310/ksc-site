# frontend/views.py

from django.shortcuts import render
from django.views.generic.detail import DetailView

from newests.models import Newests


def index(request):
    return render(request, 'frontend/index.html')


class NewestsDetailView(DetailView):
    model = Newests
    template_name = 'frontend/index.html'