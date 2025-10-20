import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../product/models/product.model';

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartItemWithDetails extends CartItem {
  product: Product;
  subtotal: number;
}

export interface CartSummaryDetails {
  totalItems: number;
  subtotal: number;
  totalPrice: number;
  shipping: number;
  tax: number;
}
export interface CartState extends EntityState<CartItem> {
  isLoading: boolean;
  error: any | null;
}

export const cartAdapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
  selectId: (cartItem: CartItem) => cartItem.productId,
});

export const initialCartState: CartState = cartAdapter.getInitialState({
  isLoading: false,
  error: null,
});
