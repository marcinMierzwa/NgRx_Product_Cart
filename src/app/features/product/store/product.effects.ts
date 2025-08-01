import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductListApiService } from '../services/product-list.api.service';
import { ProductActions } from './product.actions';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProductsState } from './product.reducer';
import { selectCategoryEntities } from '../../categories/store/category.reducer';
import {
  selectDisplayMode,
  selectPagination,
  selectSelectedCategoryId,
} from './product.reducer';

export const loadProductsOnFilterChange$ = createEffect(
  (
    actions$ = inject(Actions),
    apiService = inject(ProductListApiService),
    store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(
        ProductActions.showBestsellers,
        ProductActions.showAllProducts,
        ProductActions.showCategory,
        ProductActions.changePage,
        ProductActions.loadProducts
      ),
      // Geting all state
      withLatestFrom(
        store.select(selectDisplayMode),
        store.select(selectPagination),
        store.select(selectSelectedCategoryId)
      ),
      // using switchMap, to delete last request
      switchMap(([action, displayMode, pagination, selectedCategoryId]) => {
        // creating params
        const params: { [key: string]: any } = {
          page: pagination.currentPage,
          pageSize: pagination.pageSize,
        };
        // logic to bulid params depending on display mode
        switch (displayMode) {
          case 'bestsellers':
            // params['sortBy'] = 'ratingRate';
            // params['sortOrder'] = 'desc';
            break;

          case 'byCategory':
          case 'byCategory':
            if (selectedCategoryId) {
              params['categoryId'] = selectedCategoryId;
            }
            break;

          case 'all':
          default:
            break;
        }

        return apiService.getProducts(params).pipe(
          map((response) =>
            ProductActions.loadProductsSuccess({
              products: response.data,
              meta: response.meta,
            })
          ),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        );
      })
    );
  },
  { functional: true }
);
