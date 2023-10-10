from django.shortcuts import render
from django.http import JsonResponse
from . import kxnn_apps

DATA = {'province': 'กรุงเทพมหานคร',
        'amphoe': 'หนองจอก',
        'dryer': kxnn_apps.index('กรุงเทพมหานคร', 'หนองจอก')}


def get_data(request):
    printout = request.GET
    print(printout)
    province = printout.get('province')
    amphoe = printout.get('amphoe')
    print(province)
    print(amphoe)
    DATA['province'] = province
    DATA['amphoe'] = amphoe
    DATA['dryer'] = kxnn_apps.index(DATA.get('province'), (DATA.get('amphoe')))
    index(request)
    return JsonResponse({'input_prov': province,
                         'input_amphoe': amphoe,
                         'dry': DATA.get('dryer')})

def index(request):
    data = {'display': DATA.get('dryer'),
            'day': 1,
            'now': 1}
    html = render(request, 'index.html', data)
    return html

