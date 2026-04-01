from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = 'Populate database with extended sample data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        Category.objects.all().delete()
        Product.objects.all().delete()

        # Create 4 categories
        electronics = Category.objects.create(name='Electronics')
        clothing = Category.objects.create(name='Clothing')
        food = Category.objects.create(name='Food')
        books = Category.objects.create(name='Books')

        # Create 20 products
        products_data = [
            # Electronics (5 products)
            {'name': 'iPhone 15', 'price': 999.99, 'description': 'Latest Apple smartphone with advanced camera', 'count': 50, 'is_active': True, 'category': electronics},
            {'name': 'MacBook Pro', 'price': 2499.99, 'description': 'Professional laptop for developers', 'count': 20, 'is_active': True, 'category': electronics},
            {'name': 'Samsung TV', 'price': 899.99, 'description': '55-inch 4K Smart TV', 'count': 15, 'is_active': True, 'category': electronics},
            {'name': 'AirPods Pro', 'price': 249.99, 'description': 'Wireless earbuds with noise cancellation', 'count': 80, 'is_active': True, 'category': electronics},
            {'name': 'iPad Air', 'price': 599.99, 'description': '10.9-inch tablet with M1 chip', 'count': 35, 'is_active': True, 'category': electronics},
            
            # Clothing (5 products)
            {'name': 'T-Shirt', 'price': 29.99, 'description': 'Cotton t-shirt in various colors', 'count': 100, 'is_active': True, 'category': clothing},
            {'name': 'Jeans', 'price': 79.99, 'description': 'Classic blue jeans', 'count': 60, 'is_active': True, 'category': clothing},
            {'name': 'Sweater', 'price': 49.99, 'description': 'Warm wool sweater', 'count': 40, 'is_active': True, 'category': clothing},
            {'name': 'Dress', 'price': 89.99, 'description': 'Elegant evening dress', 'count': 25, 'is_active': True, 'category': clothing},
            {'name': 'Jacket', 'price': 129.99, 'description': 'Waterproof winter jacket', 'count': 30, 'is_active': True, 'category': clothing},
            
            # Food (5 products)
            {'name': 'Pizza', 'price': 12.99, 'description': 'Delicious pepperoni pizza', 'count': 30, 'is_active': True, 'category': food},
            {'name': 'Burger', 'price': 8.99, 'description': 'Classic beef burger', 'count': 45, 'is_active': True, 'category': food},
            {'name': 'Salad', 'price': 6.99, 'description': 'Fresh garden salad', 'count': 50, 'is_active': True, 'category': food},
            {'name': 'Pasta', 'price': 10.99, 'description': 'Italian pasta with tomato sauce', 'count': 35, 'is_active': True, 'category': food},
            {'name': 'Sandwich', 'price': 5.99, 'description': 'Club sandwich with fries', 'count': 40, 'is_active': True, 'category': food},
            
            # Books (5 products)
            {'name': 'Python Programming', 'price': 39.99, 'description': 'Learn Python programming', 'count': 25, 'is_active': True, 'category': books},
            {'name': 'Data Science', 'price': 49.99, 'description': 'Introduction to data science', 'count': 20, 'is_active': True, 'category': books},
            {'name': 'Web Development', 'price': 44.99, 'description': 'Modern web development guide', 'count': 30, 'is_active': True, 'category': books},
            {'name': 'Machine Learning', 'price': 59.99, 'description': 'Machine learning basics', 'count': 15, 'is_active': True, 'category': books},
            {'name': 'Database Design', 'price': 34.99, 'description': 'Database design principles', 'count': 22, 'is_active': True, 'category': books},
        ]

        for product_data in products_data:
            Product.objects.create(**product_data)

        self.stdout.write(self.style.SUCCESS('Extended sample data created successfully!'))
        self.stdout.write(f'Created {Category.objects.count()} categories and {Product.objects.count()} products')
