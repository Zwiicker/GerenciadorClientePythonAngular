from django.db import models

# Create your models here.

class Usuario(models.Model) : 
    UsuarioId = models.AutoField(primary_key = True)
    UsuarioNome = models.CharField(max_length=100)
    UsuarioEmail = models.CharField(max_length=100)
    UsuarioTelefone = models.PositiveIntegerField(default=0)
    UsuarioEndereco = models.CharField(max_length=100)
    UsuarioProfissao = models.CharField(max_length=100)
    UsuarioArquivoCurriculo = models.CharField(max_length=100)
    