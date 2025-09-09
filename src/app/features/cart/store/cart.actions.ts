import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Product To Cart': props<{ productId: string }>(),
    'Remove Product From Cart': props<{ productId: string }>(),
    'Increment Product Quantity': props<{ productId: string }>(),
    'Decrement Product Quantity': props<{ productId: string }>(),
    'Clear Cart': emptyProps(),
  },
});
