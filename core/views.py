
from django.shortcuts import render

from core.firebase import database,authenticate

# Create your views here.
def index(request):
    name = database.child("Data").child("name").get().val()
    age = database.child("Data").child("age").get().val()
    course = database.child("Data").child("course").get().val()
    school = database.child("Data").child("school").get().val()
    data = {
        "name" : name,
        "age" :age,
        "course":course,
        "school":school
    }
    return render(request,'index.html',data)