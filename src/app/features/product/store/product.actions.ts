import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../models/product.model';
import { PageMeta } from '../../../shared/models/page-meta.model';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[]; meta: PageMeta }>(),
    'Load Products Failure': props<{ error: any }>(),
    'Show Bestsellers': emptyProps(),
    'Show All Products': emptyProps(),
    'Show Category': props<{ categoryId: number }>(),
    'Change Page': props<{ page: number }>(),
    'Search Products': props<{ searchTerm: string }>(),
  },
});
