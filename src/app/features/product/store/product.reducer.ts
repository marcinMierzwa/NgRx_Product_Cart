import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { initialProductState, productAdapter } from './product.state';
import { ProductActions } from './product.actions';

export const productFeature = createFeature({
  name: 'products', // this is a key to register product state
  reducer: createReducer(
    initialProductState,
    // when filter is applying or changing
    on(ProductActions.setFilter, (state, { filter }) => ({
      ...state,
      activeFilter: filter,
      isLoading: true,
    })),
    // when starts loading
    on(ProductActions.loadProducts, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    })),
    // when loading success
    on(ProductActions.loadProductsSuccess, (state, { products }) => {
      // we're using adapter to fetch all products to state
      return productAdapter.setAll(products, { ...state, isLoading: false });
    }),
    // when loading success
    on(ProductActions.loadProductsFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    }))
  ),
  extraSelectors: ({ selectProductsState }) => {
    const { selectAll, selectEntities, selectIds, selectTotal } =
      productAdapter.getSelectors();

    return {
      selectAllProducts: createSelector(selectProductsState, selectAll),
      selectProductEntities: createSelector(
        selectProductsState,
        selectEntities
      ),
      selectProductIds: createSelector(selectProductsState, selectIds),
      selectProductTotal: createSelector(selectProductsState, selectTotal),
    };
  },
});

export const {
  selectIsLoading: selectProductIsLoading,
  selectError: selectProductError,
  selectActiveFilter,

  selectAllProducts,
  selectProductEntities,
  selectProductIds,
  selectProductTotal,
} = productFeature;
