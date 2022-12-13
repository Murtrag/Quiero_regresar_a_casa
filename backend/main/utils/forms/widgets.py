from django.forms import Widget
from django.utils.html import format_html
from django.forms.utils import flatatt
from django.utils.encoding import force_str

class HrefWidget(Widget):
    def __init__(self, related_objects=None, attrs=None):
        default_attrs = {
                'class': 'vTextField',
                'autocomplete': 'off'
                }

        if attrs:
            default_attrs.update(attrs)

        if related_objects is None: related_objects = list
        self.options = self.render_option(related_objects)

        super().__init__(attrs=default_attrs)

    def render(self, name, value, renderer, attrs=None):
        if value is None: value = ''
        final_attrs = self.build_attrs(self.attrs, attrs)
        html =  format_html('''
                <input list="browsers" name="{}" {} value="{}">
                <datalist id="browsers">
                ''',name, flatatt(final_attrs), force_str(value))
        html = [
                html, 
                self.options,
                '</datalist>'
                ]
        return ''.join(html)

    def render_option(self, related_objects):
        option_values =  (list(obj.objects.all()) for obj in related_objects)
        option_values = list()
        for obj in related_objects:
            option_values.extend(
                    tuple(obj.objects.all())
                    )
        return "\n".join([
            format_html('<option value="{}">{}</option>', option_value.url, option_value.title)
            for option_value in option_values
            ])













# https://github.com/google/contentbox/blob/master/third_party/django/forms/widgets.py
