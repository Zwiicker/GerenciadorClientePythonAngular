from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from UsuarioApp.models import Usuario
from UsuarioApp.serializers import UsuarioSerialazer


from django.core.files.storage import default_storage

# Create your views here.


@csrf_exempt
def  usuarioApi(request,id=0):
    if request.method=='GET':
        usuario = Usuario.objects.all()
        usuario_serialazer = UsuarioSerialazer(usuario, many=True)
        return JsonResponse(usuario_serialazer.data, safe=False)

    elif request.method=='POST':
        usuario_data = JSONParser().parse(request)
        usuario_serialazer = UsuarioSerialazer(data=usuario_data)
        if usuario_serialazer.is_valid():
            usuario_serialazer.save()
            return JsonResponse("Adicionado com sucesso", safe=False)
        return JsonResponse("Falha em adicionar", safe=False)

    elif request.method=='PUT':
         usuario_data = JSONParser().parse(request)
         usuario = Usuario.objects.get(UsuarioId=usuario_data['UsuarioId'])
         usuario_serialazer=UsuarioSerialazer(usuario,data=usuario_data)
         if usuario_serialazer.is_valid():
            usuario_serialazer.save()
            return JsonResponse("Atualizado com sucesso", safe=False)
            return JsonResponse("Falha em atualizar o usuário", safe=False)

    elif request.method=='DELETE':
        usuario=Usuario.objects.get(UsuarioId=id)
        usuario.delete()
        return JsonResponse("Deletado com Sucesso", safe=False) 


@csrf_exempt
def SalvarCurriculo(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)