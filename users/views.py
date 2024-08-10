from django.shortcuts import render, redirect, get_object_or_404
from .models import User

def user_list(request):
    users = User.objects.all()
    return render(request, 'users/user_list.html', {'users': users})

def add_user(request):
    if request.method == 'POST':
        name = request.POST['name']
        username = request.POST['username']
        email = request.POST['email']
        User.objects.create(name=name, username=username, email=email)
        return redirect('user_list')  

def update_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.method == 'POST':
        user.name = request.POST['name']
        user.username = request.POST['username']
        user.email = request.POST['email']
        user.save()
        return redirect('user_list') 

def delete_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.method == 'POST':
        user.delete()
        return redirect('user_list') 
