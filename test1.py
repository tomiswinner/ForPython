# !pip install xlrd
# !pip install openpyxl
# from google.colab import drive
import pandas as pd
import openpyxl as opxl

import pprint

# def excel_date(num):
#     from datetime import datetime, timedelta
#     return(datetime(1899, 12, 30) + timedelta(days=num))
#足し算する制なので、空白のオブジェクトとかにもやってしまう。。。


df = pd.read_excel('C:/Users/mouse/Desktop/Python/pythonてすと.xlsx',usecols= [0,1,2,3],index_col= 0,header= 0)

# print(df)
# df.index = df.index.map(excel_date)

# print(df)

wb = opxl.load_workbook('C:/Users/mouse/Desktop/Python/pythonてすと.xlsx')

rdWs = wb['Sheet1']

list1 = list(rdWs.values)
# df2 = pd.DataFrame(list1)
# df2.index = df2.index.map(excel_date)
print(df)
print(df.index)
# df2.columns = df2.iloc[0,:]
# df2 = df2.drop(df2.index[0])
# # print(df2)
# df2.index = df2.iloc[:,1]
# # print(df2)

sheet_new = wb.create_sheet('Result')

df.to_excel('C:/Users/mouse/Desktop/Python/pythonてすと.xlsx',sheet_name = 'sheet2')




