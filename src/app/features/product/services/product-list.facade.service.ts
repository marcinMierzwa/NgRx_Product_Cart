import { inject, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllProducts,
  selectPagination,
  selectProductDisplayTitle,
  selectProductIsLoading,
} from '../store/product.reducer';
import { ProductActions } from '../store/product.actions';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { PageMeta } from '../../../shared/models/page-meta.model';
import { CartActions } from '../../cart/store/cart.actions';

@Injectable({ providedIn: 'root' })
export class ProductListFacadeService {
  private readonly store: Store = inject(Store);

  // set selectores as public for components
  public readonly products$: Observable<Product[]> =
    this.store.select(selectAllProducts);
  public readonly isLoading$: Observable<boolean> = this.store.select(
    selectProductIsLoading
  );
  public readonly pagination$: Observable<PageMeta> =
    this.store.select(selectPagination);
  public readonly categoryTitle$: Observable<string> = this.store.select(
    selectProductDisplayTitle
  );

  // share public method do trigger action
  loadProducts(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  showAllProducts(): void {
    this.store.dispatch(ProductActions.showAllProducts());
  }

  showBestsellers(): void {
    this.store.dispatch(ProductActions.showBestsellers());
  }

  showCategory(categoryId: number): void {
    this.store.dispatch(ProductActions.showCategory({ categoryId }));
  }

  changePage(page: number): void {
    this.store.dispatch(ProductActions.changePage({ page }));
  }

  addToCart(productId: string): void {
    if(productId) {
      this.store.dispatch(CartActions.addProductToCart({ productId }));
    }
    
  }
}
