import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Category } from '../models/category.model';

export interface CategoryState extends EntityState<Category> {
  isLoading: boolean;
  error: any | null;
}

export const categoryAdapter: EntityAdapter<Category> =
  createEntityAdapter<Category>();

export const initialCategoryState: CategoryState =
  categoryAdapter.getInitialState(
    {
    isLoading: false,
    error: null,
  }
);
