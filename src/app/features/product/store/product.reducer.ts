import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { initialProductState, productAdapter } from './product.state';
import { ProductActions } from './product.actions';
import { ProductDisplayMode } from '../models/product-display-mode.model';
import { selectCategoryEntities } from '../../categories/store/category.reducer';

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
    on(ProductActions.loadProductsSuccess, (state, { products, meta }) => {
      // we're using adapter to fetch all products to state
      return productAdapter.upsertMany(products, {
        ...state,
        isLoading: false,
        pagination: meta,
      });
    }),
    // when loading success
    on(ProductActions.loadProductsFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })),
    // when showing bestsellers
    on(ProductActions.showBestsellers, (state) => productAdapter.removeAll ({
      ...state,
      isLoading: true,
      error: null,
      displayMode: 'bestsellers' as ProductDisplayMode,
      selectedCategoryId: null,
      searchTerm: '',
      pagination: { ...state.pagination, currentPage: 1 },
    })),
    // when showing all products
    on(ProductActions.showAllProducts, (state) => productAdapter.removeAll  ({
      ...state,
      isLoading: true,
      error: null,
      displayMode: 'all' as ProductDisplayMode,
      selectedCategoryId: null,
      searchTerm: '',
      pagination: { ...state.pagination, currentPage: 1 },
    })),
    // when showing selected category
    on(ProductActions.showCategory, (state, { categoryId }) => productAdapter.removeAll ({
      ...state,
      isLoading: true,
      error: null,
      displayMode: 'byCategory' as ProductDisplayMode,
      selectedCategoryId: categoryId,
      searchTerm: '',
      pagination: { ...state.pagination, currentPage: 1 },
    })),
    // when page is changing
    on(ProductActions.changePage, (state, { page }) => ({
      ...state,
      isLoading: true,
      error: null,
      pagination: { ...state.pagination, currentPage: page },
    })),
    // when searching phrase to display
    on(ProductActions.searchProducts, (state, { searchTerm }) => productAdapter.removeAll ({
      ...state,
      isLoading: true,
      error: null,
      displayMode: 'search' as ProductDisplayMode,
      selectedCategoryId: null,
      searchTerm: searchTerm,
      pagination: { ...state.pagination, currentPage: 1 },
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
  selectSearchTerm,
} = productFeature;

export const selectProductDisplayTitle = createSelector(
  selectDisplayMode,
  selectSelectedCategoryId,
  selectCategoryEntities,
  selectSearchTerm,

  (displayMode, categoryId, categoryEntities, searchTerm) => {
    switch (displayMode) {
      case 'bestsellers':
        return 'bestsellers';

      case 'byCategory':
        const categoryName = categoryId
          ? categoryEntities[categoryId]?.name
          : undefined;
        return categoryName ?? 'category';

      case 'search':
        return searchTerm ? `Search: "${searchTerm}"` : 'Search Results';

      case 'all':
      default:
        return 'all Products';
    }
  }
);
