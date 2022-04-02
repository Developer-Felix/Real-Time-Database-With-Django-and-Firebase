import pyrebase

from django.shortcuts import render

from ...djfirebase.firebase import config


# Create your views here.
def index(request):
    return render(request,'index.html')