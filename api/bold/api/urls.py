from rest_framework import routers
from .views import UserViewSet, ActivityViewSet
from django.urls import path, include
from .views import signup

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'activities', ActivityViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('signup', signup, name='signup'),
]
