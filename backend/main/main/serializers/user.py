from rest_framework import serializers
from django.contrib.auth.models import User
from main.models import Profile

class UserSerializer(serializers.HyperlinkedModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.obejcts.all())]
            )
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())],
            )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
                validated_data['username'],
                validated_data['password']
                )
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password',)

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    
    internal_currency = serializers.ReadOnlyField()
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ('user', 'phone_number', 'internal_currency',)


