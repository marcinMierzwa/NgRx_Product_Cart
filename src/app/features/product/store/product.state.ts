import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../models/product.model';
import { ProductDisplayMode } from '../models/product-display-mode.model';

export interface ProductState extends EntityState<Product> {
  // searchTerm: string;
  isLoading: boolean;
  error: any | null;
  displayMode: ProductDisplayMode;
  selectedCategoryId: number | null; // when ProductDisplayMode === 'byCategory'
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  }
}

// Entity Adapter provides fuctionality
export const productAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

// Defined intitial state
export const initialProductState: ProductState = productAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
    displayMode: 'all', // default init
    selectedCategoryId: null,
    pagination: {
      currentPage: 1,
      pageSize: 20,
      totalItems: 0,
      totalPages: 0,
    },
  }
);
