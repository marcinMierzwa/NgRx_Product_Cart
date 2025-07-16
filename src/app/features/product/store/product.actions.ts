import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ProductActions = createActionGroup({
  source: 'Product API', // source of actions
  events: {
    // action which triggering loading products
    'Load Products': emptyProps(),
    // action invokes when products are successfully loaded
    'Load Products Success': props<{ products: Product[] }>(),
    // action invokes when error occured
    'Load Products Failure': props<{ error: any }>(),
  },
});
