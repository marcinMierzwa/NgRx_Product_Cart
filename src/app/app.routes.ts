import { Routes } from '@angular/router';
import { CategoriesFacadeService } from './features/categories/services/categories.facade.service';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,

    providers: [
      CategoriesFacadeService,
    ],

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        title: 'Home',
        loadChildren: () =>
          import('./features/product/store/product.routes').then(
            (m) => m.PRODUCT_ROUTES
          ),
      },
      {
        path: 'cart',
        title: 'Shopping Cart',
        loadChildren: () =>
          import('./features/cart/store/cart.routes').then(
            (m) => m.CART_ROUTES
          ),
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
];
