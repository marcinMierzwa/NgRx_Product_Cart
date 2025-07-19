import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../models/product.model';

export interface ProductState extends EntityState<Product> {
  // searchTerm: string;
  // pagination: { pageIndex: number, pageSize: number };
  isLoading: boolean;
  error: any | null;
}

// Entity Adapter provides fuctionality
export const productAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

// Defined intitial state
export const initialProductState: ProductState = productAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
  }
);
