from rest_framework import serializers
from UsuarioApp.models import Usuario

class UsuarioSerialazer(serializers.ModelSerializer):
    class Meta:
        model = Usuario  
        fields = ('UsuarioId',
       'UsuarioNome',
       'UsuarioEmail',
       'UsuarioTelefone',
       'UsuarioEndereco',
       'UsuarioProfissao',
       'UsuarioArquivoCurriculo')