import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CartProductsListComponent } from '../components/cart-products-list/cart-products-list.component';

export const CART_ROUTES: Routes = [
  {
    path: '',
    component: CartProductsListComponent,
    title: 'Shopping Cart',
    // providers: [
    //   provideState(cartFeature),
    //   provideEffects(cartEffects),
    // ],
  },
  // w przyszłości można dodać np. /cart/details/:id
];