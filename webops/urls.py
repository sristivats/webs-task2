from django.contrib import admin
from django.urls import path,include
from users import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', views.user_list), 
]
def some_view_function():
    from users import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')), 
    
]
















