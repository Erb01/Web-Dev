from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category
def products_list(request):
    products = Product.objects.all()
    data = {'products': [p.to_json() for p in products]}
    return JsonResponse(data)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product.to_json())

def categories_list(request):
    categories = Category.objects.all()
    data = {'categories': [c.to_json() for c in categories]}
    return JsonResponse(data)


def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category.to_json())

def products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.all()
    data = {'products': [p.to_json() for p in products]}
    return JsonResponse(data)
