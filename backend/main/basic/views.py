from django.shortcuts import render
from django.http import JsonResponse


def test(request):
    return render(request, 'errors/under_construction.html', {})
    return JsonResponse(html)
