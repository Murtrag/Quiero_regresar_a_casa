from django.shortcuts import render
from django.http import JsonResponse

def test(request):
    html = {'db': "Hi guys, It works!!! \o/" }
    return JsonResponse(html)

