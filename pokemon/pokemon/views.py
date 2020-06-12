from django.shortcuts import render

def index(request):
	# Return the index template which subsequently loads the ReactJS app
    return render(request, 'index.html')