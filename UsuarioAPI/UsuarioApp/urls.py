from django.conf.urls import url
from UsuarioApp import views

from django.conf.urls.static import static
from django.conf import settings


urlpatterns=[
    url(r'^usuario/$', views.usuarioApi),
    url(r'^usuario/([0-9]+)$',views.usuarioApi),
    url(r'^SalvarCurriculo$', views.SalvarCurriculo)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
 