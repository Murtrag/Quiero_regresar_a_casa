from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class MultipleFieldLookupMixin:
    """
    Apply this mixin to any view or viewset to get multiple field filtering
    based on a `lookup_fields` attribute, instead of the default single field filtering.
    """
    def _get_filter(self):
        return {
                field : self.kwargs[field]
                for field in self.lookup_fields
                if self.kwargs.get(field) 
                }

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        filters = self._get_filter()
        obj = get_object_or_404(queryset, **filters)
        self.check_object_permissions(self.request, obj)
        return obj

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        filters = self._get_filter()

        queryset = queryset.filter(**filters)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
