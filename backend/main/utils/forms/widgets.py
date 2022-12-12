from django.forms import Widget
from django.utils.html import format_html
from django.forms.utils import flatatt
from django.utils.encoding import force_str

class HrefWidget(Widget):
    def __init__(self, related_objects=None, attrs=None):
        default_attrs = {
                # 'cols': '40',
                # 'rows': '10'
                }

        if attrs:
            default_attrs.update(attrs)

        if related_objects is None:
            related_objects = list
        self.options = self.render_option(elated_objects)

        super().__init__(default_attrs)

    def render(self, name, value, renderer, attrs=None):
        if value is None: value = ''
        final_attrs = self.build_attrs(attrs)#, name=name)
        # return format_html('<textarea{0}>\r\n{1}</textarea><b>test</b>',
        return format_html('
                <input list="browsers"{0} value="{1}">
                <datalist id="browsers">
                    {2}
                </datalist> 
                ',
                           flatatt(final_attrs),
                           force_str(value),
                           self.options()
                           )

    # def render_option(self, selected_choices, option_value, option_label):
    def render_option(self, related_objects):
        option_values =  (obj.objects.all().values_list('id', 'href', 'name') in related_objects)
        # Probably I need to nest one more list comprehension
        return "\n".join([
            format_html('<option value="{0}"{1}>{2}</option>', option_value.id, option_value.href, option_value.name )
            for option_value in option_values
            ])













# https://github.com/google/contentbox/blob/master/third_party/django/forms/widgets.py
