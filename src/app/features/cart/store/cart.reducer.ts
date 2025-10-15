import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import {
  cartAdapter,
  CartItem,
  CartItemWithDetails,
  CartSummaryDetails,
  initialCartState,
} from './cart.state';
import { CartActions } from './cart.actions';
import { selectProductEntities } from '../../product/store/product.reducer';
import { Product } from '../../product/models/product.model';

export const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialCartState,
    on(CartActions.addProductToCart, (state, { productId }) => {
      const existingItem = state.entities[productId];
      if (existingItem) {
        const updatedItem: CartItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        return cartAdapter.upsertOne(updatedItem, {
          ...state,
          isLoading: false,
          error: null,
        });
      } else {
        const newItem: CartItem = {
          productId: productId,
          quantity: 1,
        };
        return cartAdapter.addOne(newItem, {
          ...state,
          isLoading: false,
          error: null,
        });
      }
    }),
    on(CartActions.removeProductFromCart, (state, { productId }) => {
      return cartAdapter.removeOne(productId, {
        ...state,
        isLoading: false,
        error: null,
      });
    }),
    on(CartActions.incrementProductQuantity, (state, { productId }) => {
      const existingItem = state.entities[productId];
      if (existingItem) {
        const updatedItem: CartItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        return cartAdapter.upsertOne(updatedItem, {
          ...state,
          isLoading: false,
          error: null,
        });
      }
      return state;
    }),
    on(CartActions.decrementProductQuantity, (state, { productId }) => {
      const existingItem = state.entities[productId];
      if (existingItem && existingItem.quantity > 1) {
        const updatedItem: CartItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        return cartAdapter.upsertOne(updatedItem, {
          ...state,
          isLoading: false,
          error: null,
        });
      } else if (existingItem && existingItem.quantity === 1) {
        return cartAdapter.removeOne(productId, {
          ...state,
          isLoading: false,
          error: null,
        });
      }
      return state;
    }),
    on(CartActions.clearCart, (state) => {
      return initialCartState;
    })
  ),

  // ----------selectors------------
  extraSelectors: ({ selectCartState }) => {
    const { selectAll, selectEntities, selectIds, selectTotal } =
      cartAdapter.getSelectors();

    const selectAllCartItems = createSelector(selectCartState, selectAll);
    const selectCartItemEntities = createSelector(
      selectCartState,
      selectEntities
    );

    // Selector for products list with details
    const selectCartItemsWithDetails = createSelector(
      selectAllCartItems,
      selectProductEntities,
      (cartItems, productEntities): CartItemWithDetails[] => {
        return cartItems.map((item) => {
          const product = productEntities[item.productId];

          if (product) {
            const subtotal = product.price * item.quantity; //
            return {
              ...item,
              product,
              subtotal,
            };
          }
          const defaultProduct: Product = {
            id: item.productId,
            title: 'Unknown Product',
            price: 0,
            description: 'Product details not available.',
            image: 'https://via.placeholder.com/150',
            ratingRate: 0,
            ratingCount: 0,
            createdAt: new Date(0),
            updatedAt: new Date(0),
            categoryId: 'unknown',
          };
          return {
            ...item,
            product: defaultProduct,
            subtotal: 0,
          };
        });
      }
    );

    // Selector for all amount of products
    const selectTotalItemsInCart = createSelector(
      selectAllCartItems,
      (cartItems): number => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
      }
    );

    // Selector for summary price
    const selectTotalPrice = createSelector(
      selectCartItemsWithDetails,
      (cartItemsWithDetails): number => {
        return cartItemsWithDetails.reduce(
          (total, item) => total + item.subtotal,
          0
        );
      }
    );

    // Selector for cart summary (totalItems, totalPrice, shipping, tax)
    const selectCartSummaryDetails = createSelector(
      selectTotalItemsInCart,
      selectTotalPrice,
      (totalItems, totalPrice): CartSummaryDetails => {
        const shipping = totalPrice > 100 ? 0 : 10;
        const tax = totalPrice * 0.08; // example tax 8%
        return {
          totalItems,
          totalPrice,
          shipping,
          tax,
        };
      }
    );

    return {
      selectAllCartItems,
      selectCartItemEntities,
      selectCartItemsWithDetails,
      selectTotalItemsInCart,
      selectTotalPrice,
      selectCartSummaryDetails,
    };
  },
});

export const {
  selectCartState,
  selectIsLoading: selectCartIsLoading,
  selectError: selectCartError,

  selectAllCartItems,
  selectCartItemEntities,
  selectCartItemsWithDetails,
  selectTotalItemsInCart,
  selectTotalPrice,
  selectCartSummaryDetails,
} = cartFeature;
