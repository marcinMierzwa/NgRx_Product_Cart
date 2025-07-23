import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductListApiService } from '../services/product-list.api.service';
import { ProductActions } from './product.actions';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectActiveFilter } from './product.reducer';

export const loadProductsOnFilterChange$ = createEffect(
  (
    actions$ = inject(Actions),
    apiService = inject(ProductListApiService),
    store = inject(Store)
  ) => {
    return actions$.pipe(
      // Uruchom ten efekt, gdy ZMIENI SIĘ FILTR lub gdy ktoś wywoła 'Load Products'
      ofType(ProductActions.setFilter, ProductActions.loadProducts),
      // Pobierz najnowszy stan filtra z Store
      withLatestFrom(store.select(selectActiveFilter)),
      // Używamy switchMap, aby anulować poprzednie żądanie, jeśli filtr szybko się zmieni
      switchMap(([action, activeFilter]) => {
        // Konstruujemy parametry zapytania
        const params: { [key: string]: any } = { _limit: 20 };
        if (activeFilter === 'bestsellers') {
          params['_sort'] = 'rating.rate';
          params['_order'] = 'desc';
        }
        
        return apiService.getProducts(params).pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) => of(ProductActions.loadProductsFailure({ error })))
        );
      })
    );
  },
  { functional: true }
);

