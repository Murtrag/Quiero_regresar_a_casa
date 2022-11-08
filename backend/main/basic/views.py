from django.shortcuts import render
from django.http import JsonResponse

def test(request):
    html = "Hi guys, It works!!! \o/" 
    return JsonResponse(html)

