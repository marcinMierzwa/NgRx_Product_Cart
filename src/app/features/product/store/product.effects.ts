import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductListApiService } from '../services/product-list.api.service';
import { ProductActions } from './product.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Product } from '../models/product.model';

export const loadProducts$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    apiService: ProductListApiService = inject(ProductListApiService)
  ) => {
    return actions$.pipe(
      ofType(ProductActions.loadProducts),
      // exhaustMap ignores new actions 'loadProducts' until previous request is not finished, it prevent from multiple, unnecessary invoking API
      exhaustMap(() =>
        apiService.getProducts().pipe(
          // if success invoke 'Success' action with fetched products
          map((products: Product[]) =>
            ProductActions.loadProductsSuccess({ products })
          ),
          // if error occured invoke action 'Failure' with error
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true } // we're using modern, functionality efects
);
