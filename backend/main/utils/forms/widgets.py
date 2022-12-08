from django.forms import Widget
from django.utils.html import format_html
from django.forms.utils import flatatt
from django.utils.encoding import force_str

class HrefWidget(Widget):
    def __init__(self, attrs=None):
        default_attrs = {'cols': '40', 'rows': '10'}
        if attrs:
            default_attrs.update(attrs)
        super().__init__(default_attrs)

    def render(self, name, value,renderer, attrs=None):
        if value is None: value = ''
        final_attrs = self.build_attrs(attrs)#, name=name)
        return format_html('<textarea{0}>\r\n{1}</textarea><b>test</b>',
                           flatatt(final_attrs),
                           force_str(value))

# https://github.com/google/contentbox/blob/master/third_party/django/forms/widgets.py
