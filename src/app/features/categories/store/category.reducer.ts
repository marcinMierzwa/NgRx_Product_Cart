import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { CategoryActions } from './category.actions';
import { categoryAdapter, initialCategoryState } from './category.state';

export const categoryFeature = createFeature({
  name: 'categories',
  reducer: createReducer(
    initialCategoryState,
    on(CategoryActions.loadCategories, (state) => ({
      ...state,
      isLoading: true, 
      error: null,
    })),
    on(CategoryActions.loadCategoriesSuccess, (state, { categories }) => {
      return categoryAdapter.setAll(categories, { ...state, isLoading: false });
    }),
    on(CategoryActions.loadCategoriesFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error
    }))
  ),
});

const {
  selectEntities,
  selectAll,
  selectTotal,
  selectIds
} = categoryAdapter.getSelectors();

const selectCategoryState = categoryFeature.selectCategoriesState;

export const selectAllCategories = createSelector(selectCategoryState, selectAll);
export const selectCategoryEntities = createSelector(selectCategoryState, selectEntities);
export const selectCategoryIds = createSelector(selectCategoryState, selectIds);
export const selectCategoryTotal = createSelector(selectCategoryState, selectTotal);

export const selectCategoryIsLoading = categoryFeature.selectIsLoading;
export const selectCategoryError = categoryFeature.selectError;
