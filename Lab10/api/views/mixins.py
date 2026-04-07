from rest_framework import generics, mixins, status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer


class ProductListAPIView(mixins.ListModelMixin, 
                        mixins.CreateModelMixin, 
                        generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetailAPIView(mixins.RetrieveModelMixin, 
                          mixins.UpdateModelMixin, 
                          mixins.DestroyModelMixin, 
                          generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        product = self.get_object()
        if product.is_active:
            return Response(
                {"error": "Cannot delete active product. Set is_active to False first."},
                status=status.HTTP_400_BAD_REQUEST
            )
        return self.destroy(request, *args, **kwargs)


class CategoryListAPIView(mixins.ListModelMixin, 
                         mixins.CreateModelMixin, 
                         generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryDetailAPIView(mixins.RetrieveModelMixin, 
                           mixins.UpdateModelMixin, 
                           mixins.DestroyModelMixin, 
                           generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryProductsAPIView(generics.GenericAPIView):
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'category_id'
    
    def get_queryset(self):
        category_id = self.kwargs.get(self.lookup_url_kwarg)
        category = generics.get_object_or_404(Category, id=category_id)
        return category.products.all()
    
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
