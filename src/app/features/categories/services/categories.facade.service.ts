import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from '../models/category.model';
import {
  selectAllCategories,
  selectCategoryIsLoading,
} from '../store/category.reducer';
import { Observable } from 'rxjs';
import { CategoryActions } from '../store/category.actions';

@Injectable()
export class CategoriesFacadeService {
  private readonly store: Store = inject(Store);
  public readonly categories$: Observable<Category[]> =
    this.store.select(selectAllCategories);
  public readonly isLoading$: Observable<boolean> = this.store.select(
    selectCategoryIsLoading
  );

  loadCategories(): void {
    this.store.dispatch(CategoryActions.loadCategories());
  }
}
