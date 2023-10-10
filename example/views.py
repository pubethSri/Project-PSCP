from django.shortcuts import render
from django.http import JsonResponse
from . import kxnn_apps

DEFAULT = kxnn_apps.index('กรุงเทพมหานคร', 'หนองจอก')

DATA = {'province': 'กรุงเทพมหานคร',
        'amphoe': 'หนองจอก',
        'dryer': DEFAULT[0],
        'day': DEFAULT[1]}


def get_data(request):
    printout = request.GET
    print(printout)
    province = printout.get('province')
    amphoe = printout.get('amphoe')
    print(province)
    print(amphoe)
    DATA['province'] = province
    DATA['amphoe'] = amphoe
    DEFAULT = kxnn_apps.index(DATA.get('province'), (DATA.get('amphoe')))
    DATA['dryer'] = DEFAULT[0]
    DATA['day'] = DEFAULT[1]
    index(request)
    return JsonResponse({'input_prov': province,
                         'input_amphoe': amphoe,
                         'dry': DATA.get('dryer'),
                         'now': DATA.get('day')})

def index(request):
    data = {'display': DATA.get('dryer'),
            'day': 1,
            'now': 1}
    html = render(request, 'index.html', data)
    return html

