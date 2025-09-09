import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CategoriesFacadeService } from './features/categories/services/categories.facade.service';
import { categoryFeature } from './features/categories/store/category.reducer';
import * as categoryEffects from './features/categories/store/category.effects';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,

    providers: [
      provideState(categoryFeature),
      provideEffects(categoryEffects),
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
