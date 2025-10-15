import { Component, inject } from '@angular/core';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartProductItemCardComponent } from '../cart-product-item-card/cart-product-item-card.component';
import { CartFacadeService } from '../../services/cart.facade.service';
import { Observable } from 'rxjs';
import {
  CartItemWithDetails,
  CartSummaryDetails,
} from '../../store/cart.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-products-list',
  standalone: true,
  imports: [CartSummaryComponent, CartProductItemCardComponent, AsyncPipe],
  templateUrl: './cart-products-list.component.html',
  styleUrl: './cart-products-list.component.scss',
})
export class CartProductsListComponent {
  private readonly cartFacadeService = inject(CartFacadeService);
  readonly cartItemsWithDetails$: Observable<CartItemWithDetails[]> =
    this.cartFacadeService.cartItemsWithDetails$;
  readonly cartSummaryDetails$: Observable<CartSummaryDetails> =
    this.cartFacadeService.cartSummaryDetails$;

  protected removeProduct(productId: string): void {
    this.cartFacadeService.removeProduct(productId);
  }

  protected decrementQuantity(productId: string): void {
    this.cartFacadeService.decrementQuantity(productId);
  }

  protected incrementQuantity(productId: string): void {
    this.cartFacadeService.incrementQuantity(productId);
  }



  // to remove
  protected clearCart(): void {
    this.cartFacadeService.clearCart();
  }
}
