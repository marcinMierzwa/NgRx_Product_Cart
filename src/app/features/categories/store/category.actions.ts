import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Category } from '../models/category.model';

export const CategoryActions = createActionGroup({
  source: 'Category API',
  events: {
    'Load Categories': emptyProps(),
    'Load Categories Success': props<{ categories: Category[] }>(),
    'Load Categories Failure': props<{ error: any }>(),
  },
});
