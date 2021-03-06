# Generated by Django 4.0.4 on 2022-05-26 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('UsuarioId', models.AutoField(primary_key=True, serialize=False)),
                ('UsuarioNome', models.CharField(max_length=100)),
                ('UsuarioEmail', models.CharField(max_length=100)),
                ('UsuarioTelefone', models.PositiveIntegerField(default=0)),
                ('UsuarioEndereco', models.CharField(max_length=100)),
                ('UsuarioProfissao', models.CharField(max_length=100)),
                ('UsuarioArquivoCurriculo', models.CharField(max_length=100)),
            ],
        ),
    ]
