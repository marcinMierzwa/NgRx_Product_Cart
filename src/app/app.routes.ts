import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
{
    path: 'home',
    loadChildren: () =>
      import('./features/product/store/product.routes').then(
        (m) => m.PRODUCT_ROUTES
      ),
  },
//   {
//     path: 'cart',
//     loadChildren: () =>
//       import('./features/cart/cart.routes').then((m) => m.CART_ROUTES),
//   },
];
