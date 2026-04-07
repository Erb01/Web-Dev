from django.urls import path
from . import views

urlpatterns = [
    # Product endpoints
    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    
    # Category endpoints  
    path('categories/', views.CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
]
