import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-product-quantity',
  standalone: true,
  imports: [],
  templateUrl: './cart-product-quantity.component.html',
  styleUrl: './cart-product-quantity.component.scss',
})
export class CartProductQuantityComponent {

  @Input({ required: true }) quantity!: number;
  @Input({ required: true }) productId!: string;
  @Output() decrementQuantity = new EventEmitter<string>();
  @Output() incrementQuantity = new EventEmitter<string>();

  protected onDecrementQuantity(productId: string): void {
    this.decrementQuantity.emit(productId);
  }

  protected onIncrementQuantity(productId: string): void {
    this.incrementQuantity.emit(productId);
  }
}
