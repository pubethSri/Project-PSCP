# example/views.py
from datetime import datetime
import requests
import json
from django.http import HttpResponse

def index(request):
    url = "https://data.tmd.go.th/nwpapi/v1/forecast/area/place"

    querystring = {"domain":"2", "province":"กรุงเทพมหานคร", "amphoe":"ลาดกระบัง", "tambon":"ลำปลาทิว", "fields":"tc,rh,cond", "starttime":"2023-09-16T23:00:00"}

    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI1OTAxN2RjZDNkMmE5NTk2MjgzNmQ4YmY3ODM4NTkyNGFmY2FkNmUyM2NmYzdhNjlkMmI3MDkxMDc5ZDU0MWE2MWE3Yjg1NzA1MDMyYTM2In0.eyJhdWQiOiIyIiwianRpIjoiYjU5MDE3ZGNkM2QyYTk1OTYyODM2ZDhiZjc4Mzg1OTI0YWZjYWQ2ZTIzY2ZjN2E2OWQyYjcwOTEwNzlkNTQxYTYxYTdiODU3MDUwMzJhMzYiLCJpYXQiOjE2OTQwNTY3NDYsIm5iZiI6MTY5NDA1Njc0NiwiZXhwIjoxNzI1Njc5MTQ2LCJzdWIiOiIyNzQzIiwic2NvcGVzIjpbXX0.fk9nFx77cz4kvydN6OY97P39-_oIZw4nbgBXLZh5cCYu5RZwo4yVvEb7E1i-Dt9oF2S15cSYLd9sq_BafcoOPV83d2pSoXQnx906t_vxkiORb_g1Een-zPQtzOQgrUao978ygPdUWlZWU7kgOWdkGF-w4QWjpq8Iry1E3pQcxTiXWu0AuVcEADbFev97QUpbakmRVIcs9V-jdNgVUYvPEfbgXxkCDA-gWmS5BeH-4mB2mX7wtqbvCeAad-6bs4v0udEfVBPYdVeEOjH-0M-iLCg-L26xO55UuZdY7I5ttsqCV90Dki5v7otHimgltXpcjjXPZ3rhX2NjMjohdnJA1SIk5Jshg5jiVtHMeN8a5fpl5x65H5CijK5kP0lrsV4VboJXu6Fzl58zVoUIu-U-5oiPhKszUrJ8DV2LUT9PecU-_bmbGHC_kJQw8AcbpeThhT1NF4jbSINN6aFZDUY1QKnG8qHOHQX45_m_Dd8HNUFPEPwWX5PNY0igr7UlTXaLTCAiKHGafctcdJeayWZOe7KLU78tZyQ2AgW1lVpJA0qX5qbecAT87HI0mwF3m6nd3UzfuRyrr3AjgGLg66FRbIx3gYcFhSiXCq0-ahvEEZLiMHkiN-03t65Y8jdvcERu4zhngFTz_lAiao6lBfS-BwTtmphsbaOzIXAPfQndL1A"

    headers = {
        'accept': "application/json",
        'authorization': "Bearer " + token,
        }

    response = requests.request("GET", url, headers=headers, params=querystring)
    information = json.loads(response.text)
    now = datetime.now()
    html = f'''
    <html>
        <body>
            <h1>Hello from Vercel!</h1>
            <p>The current time is { now }.</p>
            <p>The current Weather condition is { information.get("data")[2] }.</p>
            <h2>T4E</h2>
        </body>
    </html>
    '''
    return HttpResponse(html)
