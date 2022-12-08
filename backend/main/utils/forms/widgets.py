from django.forms import Widget
from django.utils.html import format_html
from django.forms.utils import flatatt
from django.utils.encoding import force_str

class HrefWidget(Widget):
    def __init__(self, related_objects=None, attrs=None):
        default_attrs = {
                'cols': '40',
                'rows': '10'
                }

        if attrs:
            default_attrs.update(attrs)

        if related_objects is None:
            related_objects = list

        super().__init__(default_attrs)

    def render(self, name, value,renderer, attrs=None):
        if value is None: value = ''
        final_attrs = self.build_attrs(attrs)#, name=name)
        return format_html('<textarea{0}>\r\n{1}</textarea><b>test</b>',
                           flatatt(final_attrs),
                           force_str(value))

    def render_option(self, selected_choices, option_value, option_label):
        option_value = force_text(option_value)
        if option_value in selected_choices:
            selected_html = mark_safe(' selected="selected"')
            if not self.allow_multiple_selected:
                # Only allow for a single selection.
                selected_choices.remove(option_value)
        else:
            selected_html = ''
        return format_html('<option value="{0}"{1}>{2}</option>',
                           option_value,
                           selected_html,
                           force_text(option_label))
# https://github.com/google/contentbox/blob/master/third_party/django/forms/widgets.py
