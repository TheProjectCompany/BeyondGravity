from django.shortcuts import render, HttpResponse, HttpResponseRedirect

# Create your views here.

def index(request):
    return render(request, 'web/index.html')


def gallery(request):
    lt = [i for i in range(1,41)]
    return render(request, 'web/gallery.html', {'lt':lt})