import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProductQuantityComponent } from "../cart-product-quantity/cart-product-quantity.component";
import { WordLimitPipe } from '../../../../shared/pipes/word-limit.pipe';
import { Product } from '../../../product/models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-product-item-card',
  standalone: true,
  imports: [CartProductQuantityComponent, WordLimitPipe, CurrencyPipe],
  templateUrl: './cart-product-item-card.component.html',
  styleUrl: './cart-product-item-card.component.scss'
})
export class CartProductItemCardComponent {

  @Input({ required: true }) product!: Product;
  @Input({ required: true }) quantity!: number;
  @Output() removeProduct = new EventEmitter<string>();
  @Output() decrementQuantity = new EventEmitter<string>();
  @Output() incrementQuantity = new EventEmitter<string>();

  protected onDecrementQuatity(productId: string): void {
    this.decrementQuantity.emit(productId);
  }

  protected onIncrementQuantity(productId: string): void {
    this.incrementQuantity.emit(productId);
  }

  protected onRemoveProduct(productId: string): void {
    this.removeProduct.emit(productId);
  }
}
