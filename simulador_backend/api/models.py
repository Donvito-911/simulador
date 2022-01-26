from django.db import models
import pandas as pd
# Create your models here.
class DataBase:
    filename = ""
    # df = pd.read_csv(f"temp/data.csv", sep=";")
    # options = {"zone_0": list(df["zone_0"].unique()), "attr_0": list(df["attr_0"].unique())}
    @classmethod
    def change_db(cls, filename):
        cls.filename = filename
        cls.df = pd.read_csv(f"temp/{filename}", sep=";")
        cls.options = {"zone_0": list(cls.df["zone_0"].unique()), "attr_0": list(cls.df["attr_0"].unique())}

class DataModel(DataBase):
    def __init__(self, request):
        self.df = self.__get_dataframe(request)

    def get_json(self):
        data = self.df.pivot(index="time",columns="zone_1",values="value").reset_index().to_dict("records")
        return {"data":data, "options": self.options}
    
    def __get_dataframe(self, request):
        filter_dict = request.query_params
        return self.df.query(self.__get_query(filter_dict,self.options))

    def __get_query(self, filter_dict: dict, options: dict):
        filter_query = self.__convert_to_query(filter_dict)
        return filter_query if filter_query else self.__convert_to_query(options)
    
    @staticmethod
    def __convert_to_query(dict_: dict):
        list_ = []
        for k,v in dict_.items():
            if isinstance(v,list):
                v=v[0]
            if str(v).isnumeric():
                list_.append(f"{k} == {v}")
            else:
                list_.append(f"{k} == '{v}'")
        
        return ' & '.join(list_)