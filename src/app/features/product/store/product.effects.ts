import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductListApiService } from '../services/product-list.api.service';
import { ProductActions } from './product.actions';
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectDisplayMode,
  selectPagination,
  selectSearchTerm,
  selectSelectedCategoryId,
} from './product.reducer';
import { ScrollService } from '../../../shared/services/scroll.service';

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
        ProductActions.loadProducts,
        ProductActions.searchProducts
      ),
      // Geting all state
      withLatestFrom(
        store.select(selectDisplayMode),
        store.select(selectPagination),
        store.select(selectSelectedCategoryId),
        store.select(selectSearchTerm)
      ),
      // using switchMap, to delete last request
      switchMap(
        ([action, displayMode, pagination, selectedCategoryId, searchTerm]) => {
          const params: { [key: string]: any } = {
            pageSize: pagination.pageSize, // Domyślnie 20
            page: pagination.currentPage,
            displayMode: displayMode,
          };

          switch (displayMode) {
            case 'bestsellers':
              params['sortBy'] = 'ratingRate';
              params['sortOrder'] = 'desc';
              params['pageSize'] = 30;
              params['page'] = 1;
              break;

            case 'byCategory':
              if (selectedCategoryId) {
                params['categoryId'] = selectedCategoryId;
                params['pageSize'] = 10;
                params['page'] = 1;
              }
              break;

            case 'search':
              if (searchTerm) {
                params['search'] = searchTerm;
                params['pageSize'] = 20;
              }
              break;
          }
          if (
            action.type === ProductActions.changePage.type &&
            displayMode !== 'bestsellers'
          ) {
            params['page'] = action.page;
          }

          if (
            action.type === ProductActions.showAllProducts.type ||
            action.type === ProductActions.showCategory.type
          ) {
            params['page'] = 1;
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
        }
      )
    );
  },
  { functional: true }
);

export const scrollOnLoadSuccess$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    scrollService: ScrollService = inject(ScrollService)
  ) => {
    return actions$.pipe(
      ofType(ProductActions.loadProductsSuccess),
      tap(() => {
        scrollService.triggerScrollToTop();
      })
    );
  },
  { functional: true, dispatch: false }
);
