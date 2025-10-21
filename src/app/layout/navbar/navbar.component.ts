import { Component, inject, OnInit, signal } from '@angular/core';
import { DesktopNavComponent } from './desktop-nav/desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav/mobile-nav.component';
import { LayoutService } from '../../core/services/layout.service';
import { Observable } from 'rxjs';
import { CategoriesFacadeService } from '../../features/categories/services/categories.facade.service';
import { Category } from '../../features/categories/models/category.model';
import { ProductListFacadeService } from '../../features/product/services/product-list.facade.service';
import { Store } from '@ngrx/store';
import { selectTotalItemsInCart } from '../../features/cart/store/cart.reducer';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DesktopNavComponent, MobileNavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly layoutService: LayoutService = inject(LayoutService);
  private readonly categoryFacadeService: CategoriesFacadeService = inject(
    CategoriesFacadeService
  );
  private readonly productFacadeService: ProductListFacadeService = inject(
    ProductListFacadeService
  );
  private readonly store = inject(Store);

  readonly isMoblieView = this.layoutService.isMobile;
  categories$: Observable<Category[]> = this.categoryFacadeService.categories$;

  readonly itemsCount$: Observable<number> = this.store.select(selectTotalItemsInCart);

  onShowAll(): void {
    this.productFacadeService.showAllProducts();
  }

  onShowBestsellers(): void {
    this.productFacadeService.showBestsellers();
  }

  onShowCategory(categoryId: number): void {
    this.productFacadeService.showCategory(categoryId);
  }

  ngOnInit(): void {
    this.categoryFacadeService.loadCategories();
  }
}
