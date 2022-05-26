# Gerenciador de Clientes em Python Django + AngularJs.

## Criando Projeto Localmente  ou/e clonar o repositório.

##### Para instalar o Python Django em um ambiente local, crie uma pasta usando o CMD:
```
python -m venv "Gerenciamento"
```
##### Ative no CMD o "Activate" da pasta Scripts criada e depois instale o django e Frameworkdjango :
```
pip install django==3.2.10  /  pip install djangorestframework==3.11.1
```
##### Rode o servidor e instale o pacote :
```
python manage.py runserver  /  pip install django-cors-headers
```
##### Instale o SQlite e conecte ele com o arquivo que está na pasta criada, depois faça migration e migrate pro banco de dados :
```
python manage.py makemigrations "ClienteApp"  /  python manage.py migrate "ClienteApp"
```
## Criando Projeto AngularJS e abrindo o servidor :
```
ng new "nome"  /  ng serve --open
```
