import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { initialProductState, productAdapter } from './product.state';
import { ProductActions } from './product.actions';
import { ProductDisplayMode } from '../models/product-display-mode.model';

export const productFeature = createFeature({
  name: 'products', // this is a key to register product state
  reducer: createReducer(
    initialProductState,

    // when starts loading
    on(ProductActions.loadProducts, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    })),
    // when loading success
    on(
      ProductActions.loadProductsSuccess,
      (state, { products, meta }) => {
        // we're using adapter to fetch all products to state
        return productAdapter.setAll(products, {
          ...state,
          isLoading: false,
           pagination: {
            currentPage: meta.currentPage,
            pageSize: meta.pageSize,
            totalItems: meta.totalItems,
            totalPages: meta.totalPages,
          },
        });
      }
    ),
    // when loading success
    on(ProductActions.loadProductsFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })),
    // when showing bestsellers
    on(ProductActions.showBestsellers, (state) => ({
      ...state,
      displayMode: 'bestsellers' as ProductDisplayMode,
      selectedCategoryId: null,
      pagination: { ...state.pagination, currentPage: 1 },
    })),
    // when showing all products
    on(ProductActions.showAllProducts, (state) => ({
      ...state,
      displayMode: 'all' as ProductDisplayMode,
      selectedCategoryId: null,
      pagination: { ...state.pagination, currentPage: 1 },
    })),
    // when showing selected category
    on(ProductActions.showCategory, (state, { categoryId }) => ({
      ...state,
      displayMode: 'byCategory' as ProductDisplayMode,
      selectedCategoryId: categoryId,
      pagination: { ...state.pagination, currentPage: 1 },
    })),
    // when page is changing
    on(ProductActions.changePage, (state, { page }) => ({
      ...state,
      pagination: { ...state.pagination, currentPage: page },
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
  selectProductsState,
  selectIsLoading: selectProductIsLoading,
  selectError: selectProductError,
  selectDisplayMode,
  selectSelectedCategoryId,
  selectPagination,

  selectAllProducts,
  selectProductEntities,
  selectProductIds,
  selectProductTotal,
} = productFeature;
