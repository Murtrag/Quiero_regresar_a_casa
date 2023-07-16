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


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    email = serializers.EmailField(source='user.email')
    # internal_currency = serializers.ReadOnlyField()

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
        for attr, value in user_data.items():
            setattr(instance.user, attr, value)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.user.save()
        instance.save()
        return instance

    class Meta:
        model = Profile
        fields = (
                "username",
                "email",
                "first_name",
                "last_name",
                "phone_number",
                "address",
                "city",
                "country",
                "postal_code",
                "profile_description",
                )


