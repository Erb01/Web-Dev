import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input.required<Product[]>();
  productDeleted = output<number>();
  productLiked = output<{productId: number, likes: number}>();

  onProductDeleted(productId: number) {
    this.productDeleted.emit(productId);
  }

  onProductLiked(event: {productId: number, likes: number}) {
    this.productLiked.emit(event);
  }
}
