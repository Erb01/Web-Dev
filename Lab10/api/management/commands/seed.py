from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = 'Seed the database with sample categories and products'

    def handle(self, *args, **options):
        self.stdout.write('Seeding database...')
        
        # Create categories
        electronics, _ = Category.objects.get_or_create(name='Electronics')
        clothing, _ = Category.objects.get_or_create(name='Clothing')
        food, _ = Category.objects.get_or_create(name='Food')
        
        self.stdout.write(self.style.SUCCESS(f'Created categories: {electronics.name}, {clothing.name}, {food.name}'))
        
        # Create products
        products_data = [
            {
                'name': 'Laptop',
                'price': 999.99,
                'description': 'High-performance laptop',
                'count': 10,
                'is_active': True,
                'category': electronics
            },
            {
                'name': 'Smartphone',
                'price': 699.99,
                'description': 'Latest smartphone model',
                'count': 20,
                'is_active': True,
                'category': electronics
            },
            {
                'name': 'T-Shirt',
                'price': 29.99,
                'description': 'Cotton t-shirt',
                'count': 50,
                'is_active': True,
                'category': clothing
            },
            {
                'name': 'Jeans',
                'price': 79.99,
                'description': 'Blue denim jeans',
                'count': 30,
                'is_active': True,
                'category': clothing
            },
            {
                'name': 'Pizza',
                'price': 12.99,
                'description': 'Delicious pepperoni pizza',
                'count': 100,
                'is_active': True,
                'category': food
            },
            {
                'name': 'Burger',
                'price': 8.99,
                'description': 'Juicy beef burger',
                'count': 80,
                'is_active': True,
                'category': food
            },
        ]
        
        for product_data in products_data:
            product, created = Product.objects.get_or_create(
                name=product_data['name'],
                defaults=product_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created product: {product.name}'))
            else:
                self.stdout.write(self.style.WARNING(f'Product already exists: {product.name}'))
        
        self.stdout.write(self.style.SUCCESS('Database seeding completed!'))
