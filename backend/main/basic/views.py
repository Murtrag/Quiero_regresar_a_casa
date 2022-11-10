from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import mixins, generics
from .models import Article
from .serializers import ArticleSerializer
from utils.rest_framework import mixins as custom_mixins
from uti

def under_construction_view(request):
    return render(request, 'errors/under_construction.html', {})


class ArticleDetail(
        mixins.RetrieveModelMixin,
        custom_mixins.MultipleFieldLookupMixin,
        generics.GenericAPIView
        ):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_fields = ('language', 'country', 'title')

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
