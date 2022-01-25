from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files.storage import default_storage
from .models import DataModel

class PostFile(APIView):
    def post(self, request):
        file = request.FILES["file"]
        try:
            default_storage.save(f"temp/{file.name}", file)
            return Response({"response":f"saved succesfully {file.name}"})
        except:
            return Response({"response":"it didnt saved"})

class GetData(APIView):
    def get(self, request, filename):
        if filename != DataModel.filename:
            DataModel.change_db(filename)
        data = DataModel(request)
        return Response({"response": data.get_json()})


            



