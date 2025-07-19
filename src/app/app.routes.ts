import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CategoriesFacadeService } from './features/categories/services/categories.facade.service';
import { categoryFeature } from './features/categories/store/category.reducer';
import * as categoryEffects from './features/categories/store/category.effects';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    // 3. Definiujemy trasę dla głównego layoutu
    path: '',
    component: MainLayoutComponent,
    
    // 4. TUTAJ REJESTRUJEMY STAN KATEGORII
    // Te zależności będą dostępne dla MainLayoutComponent i wszystkich jego dzieci.
    providers: [
      provideState(categoryFeature),
      provideEffects(categoryEffects),
      CategoriesFacadeService,
    ],

    // 5. Definiujemy dzieci, które będą renderowane w <router-outlet>
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        title: 'Home',
        // Ta trasa leniwie ładuje swój własny routing...
        loadChildren: () =>
          import('./features/product/store/product.routes').then(
            (m) => m.PRODUCT_ROUTES
          ),
      },
      // {
      //   path: 'cart',
      //   title: 'Shopping Cart',
      //   // ...i ta również.
      //   loadChildren: () =>
      //     import('./features/cart/cart.routes').then((m) => m.CART_ROUTES),
      // },
    ],
  },
  // Tutaj mogą być inne trasy, np. '/login', które nie używają MainLayoutComponent
];