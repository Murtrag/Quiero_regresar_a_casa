from django.shortcuts import render
from django.http import JsonResponse

def test(request):
    html = {'a':1} 
    return JsonResponse(html)

