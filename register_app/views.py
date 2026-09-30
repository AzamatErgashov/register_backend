from django.shortcuts import render
from .models import Person
from django.http import HttpResponse
# Create your views here.

def main(request):
    if request.POST:
        model = Person()
        model.username = request.POST.get('username', '')
        model.email = request.POST.get('email', '')
        model.password = request.POST.get('password', '')
        model.confirmpassword = request.POST.get('confirmpassword', '')
        model.save()
        print(request.POST)

    return render(request, 'index.html')

def get_information(request):
    queryset = Person.objects.all()
    context = {"deps": queryset}
    return render(request, "dara.html", context)