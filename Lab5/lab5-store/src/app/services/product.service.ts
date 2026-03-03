import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories = signal<Category[]>([
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ]);

  private products = signal<Product[]>([
    // Smartphones (Category 1)
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest iPhone with A17 Pro chip, titanium design',
      price: 429900,
      rating: 4.8,
      imageUrl: 'https://images.kaspi.kz/p/12345678.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/iphone-15-pro/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Premium Android phone with S Pen and amazing camera',
      price: 459900,
      rating: 4.7,
      imageUrl: 'https://images.kaspi.kz/p/23456789.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 14 Pro',
      description: 'Flagship phone with Leica camera system',
      price: 329900,
      rating: 4.6,
      imageUrl: 'https://images.kaspi.kz/p/34567890.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-14-pro/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'OnePlus 12',
      description: 'Fast charging flagship with Hasselblad camera',
      price: 289900,
      rating: 4.5,
      imageUrl: 'https://images.kaspi.kz/p/45678901.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/oneplus-12/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Google Pixel 8 Pro',
      description: 'AI-powered phone with exceptional camera',
      price: 359900,
      rating: 4.6,
      imageUrl: 'https://images.kaspi.kz/p/56789012.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/google-pixel-8-pro/',
      likes: 0,
      categoryId: 1
    },
    // Laptops (Category 2)
    {
      id: 6,
      name: 'MacBook Pro 14"',
      description: 'M3 Pro chip, brilliant Liquid Retina XDR display',
      price: 859900,
      rating: 4.9,
      imageUrl: 'https://images.kaspi.kz/p/67890123.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/macbook-pro-14/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Dell XPS 15',
      description: 'Premium Windows laptop with stunning 4K display',
      price: 689900,
      rating: 4.7,
      imageUrl: 'https://images.kaspi.kz/p/78901234.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/dell-xps-15/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Lenovo ThinkPad X1 Carbon',
      description: 'Business ultrabook with legendary keyboard',
      price: 529900,
      rating: 4.6,
      imageUrl: 'https://images.kaspi.kz/p/89012345.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'ASUS ROG Zephyrus G16',
      description: 'Gaming laptop with RTX 4070 and OLED display',
      price: 759900,
      rating: 4.8,
      imageUrl: 'https://images.kaspi.kz/p/90123456.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HP Spectre x360',
      description: 'Convertible 2-in-1 with stunning design',
      price: 629900,
      rating: 4.5,
      imageUrl: 'https://images.kaspi.kz/p/01234567.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/hp-spectre-x360/',
      likes: 0,
      categoryId: 2
    },
    // Headphones (Category 3)
    {
      id: 11,
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise canceling headphones',
      price: 189900,
      rating: 4.8,
      imageUrl: 'https://images.kaspi.kz/p/12345678.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/sony-wh-1000xm5/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'AirPods Pro 2',
      description: 'Active noise cancellation with adaptive transparency',
      price: 159900,
      rating: 4.7,
      imageUrl: 'https://images.kaspi.kz/p/23456789.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/airpods-pro-2/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      description: 'Premium comfort with world-class noise cancellation',
      price: 219900,
      rating: 4.6,
      imageUrl: 'https://images.kaspi.kz/p/34567890.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Sennheiser Momentum 4',
      description: 'Audiophile-grade wireless headphones',
      price: 249900,
      rating: 4.9,
      imageUrl: 'https://images.kaspi.kz/p/45678901.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/sennheiser-momentum-4/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'JBL Tour Pro 2',
      description: 'True wireless earbuds with smart case',
      price: 129900,
      rating: 4.4,
      imageUrl: 'https://images.kaspi.kz/p/56789012.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/jbl-tour-pro-2/',
      likes: 0,
      categoryId: 3
    },
    // Tablets (Category 4)
    {
      id: 16,
      name: 'iPad Pro 12.9"',
      description: 'M2 chip, stunning Liquid Retina XDR display',
      price: 689900,
      rating: 4.8,
      imageUrl: 'https://images.kaspi.kz/p/67890123.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/ipad-pro-12-9/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: 'Massive 14.6" AMOLED display with S Pen',
      price: 599900,
      rating: 4.7,
      imageUrl: 'https://images.kaspi.kz/p/78901234.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Microsoft Surface Pro 9',
      description: '2-in-1 tablet with laptop performance',
      price: 459900,
      rating: 4.5,
      imageUrl: 'https://images.kaspi.kz/p/89012345.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Xiaomi Pad 6',
      description: 'Premium Android tablet with high refresh rate display',
      price: 189900,
      rating: 4.4,
      imageUrl: 'https://images.kaspi.kz/p/90123456.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-pad-6/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Lenovo Tab P12 Pro',
      description: 'OLED display with productivity features',
      price: 229900,
      rating: 4.3,
      imageUrl: 'https://images.kaspi.kz/p/01234567.jpg',
      kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro/',
      likes: 0,
      categoryId: 4
    }
  ]);

  getCategories() {
    return this.categories;
  }

  getProducts() {
    return this.products;
  }

  getProductsByCategory(categoryId: number) {
    return this.products().filter(product => product.categoryId === categoryId);
  }

  updateProductLikes(productId: number, likes: number) {
    const currentProducts = this.products();
    const updatedProducts = currentProducts.map(product => 
      product.id === productId ? { ...product, likes } : product
    );
    this.products.set(updatedProducts);
  }

  deleteProduct(productId: number) {
    const currentProducts = this.products();
    const updatedProducts = currentProducts.filter(product => product.id !== productId);
    this.products.set(updatedProducts);
  }
}
