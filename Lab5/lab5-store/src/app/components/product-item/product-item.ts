import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  productDeleted = output<number>();
  productLiked = output<{productId: number, likes: number}>();

  incrementLikes() {
    const newLikes = this.product().likes + 1;
    this.productLiked.emit({
      productId: this.product().id,
      likes: newLikes
    });
  }

  deleteProduct() {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productDeleted.emit(this.product().id);
    }
  }

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product().name} - ${this.product().description}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const text = `Check out this product: ${this.product().name} - ${this.product().description}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().kaspiUrl)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
