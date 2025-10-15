import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
  addToCart = output<string>();

  protected onAddToCart(productId: string): void {
    this.addToCart.emit(productId);
  }
}
