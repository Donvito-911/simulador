from django.urls import path

from . import views

urlpatterns = [
    path('file', views.PostFile.as_view()),
    path('<filename>', views.GetData.as_view())
]