from rest_framework.serializers import ModelSerializer
from copy import deepcopy

class NonEmptySerializer(ModelSerializer):
    ''' This serializer removes empty fields from the JSON output '''
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        non_null_ret = deepcopy(ret)
        for key in ret.keys():
            if bool(ret[key]) is not True:
                non_null_ret.pop(key)
        return non_null_ret
