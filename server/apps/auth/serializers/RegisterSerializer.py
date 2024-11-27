class RegisterSerializer(serializers.ModelSerializer):
    class Meta:

        fields = ['email', 'password']

    