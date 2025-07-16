import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../models/product.model';

// EntityState to specjalny interfejs od @ngrx/entity
// Przechowuje dane w znormalizowanej formie (jak w bazie danych), co jest bardzo wydajne.
export interface ProductState extends EntityState<Product> {
  // Tutaj dodamy w przyszłości inne właściwości stanu, np.:
  // searchTerm: string;
  // pagination: { pageIndex: number, pageSize: number };
  isLoading: boolean;
  error: any | null;
}

// Entity Adapter dostarcza zestaw gotowych metod do manipulacji stanem
// (addOne, addAll, updateOne, removeOne, etc.)
export const productAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

// Definiujemy początkowy stan
export const initialProductState: ProductState = productAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
  }
);
