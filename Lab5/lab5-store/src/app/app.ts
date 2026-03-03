import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private productService;
  categories;
  selectedCategory = signal<Category | null>(null);
  selectedProducts = signal<Product[]>([]);

  constructor(productService: ProductService) {
    this.productService = productService;
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);
    this.selectedProducts.set(this.productService.getProductsByCategory(category.id));
  }

  incrementLikes(product: Product) {
    const newLikes = product.likes + 1;
    this.productService.updateProductLikes(product.id, newLikes);
    const currentCategory = this.selectedCategory();
    if (currentCategory) {
      this.selectedProducts.set(this.productService.getProductsByCategory(currentCategory.id));
    }
  }

  deleteProduct(product: Product) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(product.id);
      const currentCategory = this.selectedCategory();
      if (currentCategory) {
        this.selectedProducts.set(this.productService.getProductsByCategory(currentCategory.id));
      }
    }
  }

  shareOnWhatsApp(product: Product) {
    const text = `Check out this product: ${product.name} - ${product.description}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(product: Product) {
    const text = `Check out this product: ${product.name} - ${product.description}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiUrl)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
