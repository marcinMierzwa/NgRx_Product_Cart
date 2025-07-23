import { inject, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectActiveFilter,
  selectAllProducts,
  selectProductIsLoading,
} from '../store/product.reducer';
import { ProductActions } from '../store/product.actions';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductFilter } from '../models/product-filter.model';

@Injectable({ providedIn: 'root' })
export class ProductListFacadeService {
  private readonly store: Store = inject(Store);

  // set selectores as public for components
  public readonly products$: Observable<Product[]> =
    this.store.select(selectAllProducts);
  public readonly isLoading$: Observable<boolean> = this.store.select(
    selectProductIsLoading
  );
  public readonly activeFilter$: Observable<ProductFilter> =
    this.store.select(selectActiveFilter);

  //set filter
  setFilter(filter: ProductFilter): void {
    this.store.dispatch(ProductActions.setFilter({ filter }));
  }

  // share public method do trigger action
  loadProducts(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }
}
