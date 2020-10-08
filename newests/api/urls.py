# newests/api/urls.py

from rest_framework import routers

from .views import NewsViewSet

router = routers.DefaultRouter()
router.register('news', NewsViewSet, 'news')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls