from django.shortcuts import render
from django.http import JsonResponse

def test(request):
    html = {'db': "Hi guys, It works!!! \o/" }
    return render(
            request,
            'errors/under_construction.html',
            {}
            )
    return JsonResponse(html)

