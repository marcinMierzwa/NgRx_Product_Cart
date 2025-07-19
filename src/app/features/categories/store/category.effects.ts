import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoriesApiService } from '../services/catergories.api.service';
import { CategoryActions } from './category.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Category } from '../models/category.model';

export const loadCatergories$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    categoriesApiService: CategoriesApiService = inject(CategoriesApiService)
  ) => {
    return actions$.pipe(
      ofType(CategoryActions.loadCategories),
      exhaustMap(() =>
        categoriesApiService.getCatergories().pipe(
          map((categories: Category[]) =>
            CategoryActions.loadCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(CategoryActions.loadCategoriesFailure({ error }))
          )
        )
      )
    );
  },
{ functional: true } 
);
