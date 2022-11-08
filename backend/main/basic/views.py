from django.shortcuts import render
from django.http import JsonResponse
from django_famework import mixins, generics
from .models import Article
from .serializers import ArticleSerializer


def under_construction_view(request):
    return render(request, 'errors/under_construction.html', {})
    return JsonResponse(html)


class ArticleDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    multiple_lookup_fields = ('language', 'country', 'title')

    def get(self, request, *args, **kwargs):
        if self.request.data
        return self.retrieve(request, *args, **kwargs)
