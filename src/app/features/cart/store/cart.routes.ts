import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { CartPageComponent } from '../components/cart-page/cart-page.component';

export const CART_ROUTES: Routes = [
  {
    path: '',
    component: CartPageComponent,
    title: 'Shopping Cart',
    providers: [
      // provideEffects(cartEffects),
    ],
  },
];