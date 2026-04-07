# Switch between implementations by changing imports
# Level 2: from . import fbv
# Level 3: from . import cbv  
# Level 4: from . import mixins
# Level 5: from . import generics (Active)

from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)