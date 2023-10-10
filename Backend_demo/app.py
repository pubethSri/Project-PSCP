"""This is app.py for Endless rain project"""
from datetime import datetime,timedelta
import json
import requests

def time():  #แปลงเวลา
    start = (datetime.now().isoformat())
    end = ((datetime.now()+timedelta(hours=8)).isoformat())
    return str(start).split(':')[0]+':00:00', str(end).split(':')[0]+':00:00'

def processing(process):  #คำนวณว่าเป็น True หรือ false: True คือควรตาก False คือไม่ควร
    for items in range(len(process)):
        if process[items].get('data').get('cond') > 4: #cond ถ้ามากกว่า 4 คือมีฝนตกละ ก็เลยคิดไปเลยว่าถ้าใน 8 ชม มีฝนตกก็คือผ้าไม่แห้งแน่ๆ
            return False
    return True

def index(province, amphoe):
    """main function"""
    start, end = time()
    url = "https://data.tmd.go.th/nwpapi/v1/forecast/area/place"
    querystring = {"domain":"2", "province":province, "amphoe":amphoe, "fields":"cond", "starttime":start, "endtime":end}
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYwODFhNjRiM2RlODE3NjhhNjUwMDdmZGExNTg2Y2UzODNkNjE3NGRjYmZlMTZjMTQ2YWZlY2I4YWRlYjVhMjcxZmNkNGM0YzE5ZDQxNjk0In0.eyJhdWQiOiIyIiwianRpIjoiNjA4MWE2NGIzZGU4MTc2OGE2NTAwN2ZkYTE1ODZjZTM4M2Q2MTc0ZGNiZmUxNmMxNDZhZmVjYjhhZGViNWEyNzFmY2Q0YzRjMTlkNDE2OTQiLCJpYXQiOjE2OTU2NTkxODUsIm5iZiI6MTY5NTY1OTE4NSwiZXhwIjoxNzI3MjgxNTg1LCJzdWIiOiIyNzgxIiwic2NvcGVzIjpbXX0.QPJ6zgTbvofc2WLTWO7t3wmiOsCeWSLqzSzWHplaVJkKpZVPdkUMtj80cyrKU7XeM7rLAuVx3T_0bNuDKMyU1Mkci7sY21Asi3obuRmabW3eWb-aig4meamHw5sO90G2K5BBv9LHDkCu9VvfYzTsTLvLbLyOafNHpbDpayFuhAOGFMoVXFkX0O66kWy-Zf8Uvu7W4xANfsTXyERHOaoLybiAitJftj8O0H-WuvDhDTKqVcZuh3PguFO2Y3TnqLUh9ksbimDpiTd8I_men7b4LTAnIKhWOsroEEY0IvQrlaurv1DjV3l886JCcAa77eLbby2LriFDMDwkoc1pw9AqzWbW_IZX0GT7ndurws1D0NFWW23yXbp60_4JFIo8iZ5FsdeUcJCanfCfai87Z0zLDUOSPZt6z6FUBjBqq7Yxd_Ivz_y2tLYw5DaDGGJv990V0xj7CqiPO4IcUFfQQevWeWEM5OCwYl5jBZPtYEI4N_KIc5_KZiJzc4YWUEqV64hrhRKbY7-cjk4T_AHmjaU6LxYDdeNrnXlkyrUHml38xTH5cBYZLAq8ZBGtkt1AiaIVZB444UeHqvMKgTovaXk131HDEA_U6_gq_kKX7BnU9t-SzzsRIQZuUVaPZoMe3U2ICZrT9K5OhF8iOCjXPH11GTlMLJTTv-WH468NpDce6Iw"

    headers = {
        'accept': "application/json",
        'authorization': "Bearer " + token,
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    infor = json.loads(response.text)
    process = (infor.get('WeatherForecasts'))[0].get('forecasts')
    return processing(process)
print(index(input(), input()))  #Input เป็นภาษาไทย ชื่อจังหวัด กับอำเภอ
