import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../models/product.model';
import { PageMeta } from '../../../shared/models/page-meta.model';

export const ProductActions = createActionGroup({
  source: 'Product', // source of actions
  events: {
    // action which triggering loading products
    'Load Products': emptyProps(),
    // action invokes when products are successfully loaded
    'Load Products Success': props<{ products: Product[], meta: PageMeta }>(),
    // action invokes when error occured
    'Load Products Failure': props<{ error: any }>(),
    // context to display
    'Show Bestsellers': emptyProps(),
    'Show All Products': emptyProps(),
    'Show Category': props<{ categoryId: number }>(),
    // change pagination state
    'Change Page': props<{ page: number }>(),
  },
});
