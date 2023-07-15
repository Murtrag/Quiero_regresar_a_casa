from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from main.models import Profile

class UserSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())],
            )
    password = serializers.CharField(min_length=8, write_only=True)
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    def create(self, validated_data):
        user = User.objects.create_user(
                username=validated_data['username'],
                password=validated_data['password'],
                email=validated_data['email']
                )
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password',)

# class ProfileSerializer(serializers.HyperlinkedModelSerializer):
class ProfileSerializer(serializers.ModelSerializer):
    
    user = UserSerializer()
    internal_currency = serializers.ReadOnlyField()
    user_fields = serializers.SerializerMethodField()

    def get_user_fields(self, obj):
        fields = ("username", "first_name", "last_name", "email", )
        user_obj = User.objects.get(id=obj.user_id)
        return {
                field: getattr(user_obj, field) for field in fields
                }

    class Meta:
        model = Profile
        fields = ('user', 'phone_number', 'internal_currency', "user_fields", )


