from django.shortcuts import render
from rest_framework import mixins, generics
from .models import Article
from .serializers import ArticleSerializer, ArticleListSerializer
from utils.rest_framework import mixins as custom_mixins

def under_construction_view(request):
    return render(request, 'errors/under_construction.html', {})

class ArticleList(
        custom_mixins.MultipleFieldLookupMixin,
        # mixins.ListModelMixin,
        generics.GenericAPIView,
        ):
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer
    lookup_fields = ('country', 'language',)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class ArticleDetail(
        mixins.RetrieveModelMixin,
        custom_mixins.MultipleFieldLookupMixin,
        generics.GenericAPIView
        ):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_fields = ('country', 'language', 'url_title',)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
