import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemWithDetails, CartSummaryDetails } from '../store/cart.state';
import {
  selectCartItemsWithDetails,
  selectCartSummaryDetails,
  selectTotalItemsInCart,
} from '../store/cart.reducer';
import { CartActions } from '../store/cart.actions';

@Injectable({ providedIn: 'root' })
export class CartFacadeService {
  private readonly store = inject(Store);

  // data
  readonly cartItemsWithDetails$: Observable<CartItemWithDetails[]> =
    this.store.select(selectCartItemsWithDetails);
  readonly cartSummaryDetails$: Observable<CartSummaryDetails> =
    this.store.select(selectCartSummaryDetails);
  readonly totalItemsInCart$: Observable<number> = this.store.select(
    selectTotalItemsInCart
  );


  removeProduct(productId: string): void {
    this.store.dispatch(CartActions.removeProductFromCart({ productId }));
  }

  incrementQuantity(productId: string): void {
    this.store.dispatch(CartActions.incrementProductQuantity({ productId }));
  }

  decrementQuantity(productId: string): void {
    this.store.dispatch(CartActions.decrementProductQuantity({ productId }));
  }
  
  clearCart(): void {
    this.store.dispatch(CartActions.clearCart());
  }
}
