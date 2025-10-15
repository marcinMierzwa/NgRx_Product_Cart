import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RatingComponent } from '../../../../shared/components/rating/rating.component';
import { ProductListFacadeService } from '../../services/product-list.facade.service';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { ProductCardSkeletonComponent } from '../../../../shared/components/product-card-skeleton/product-card-skeleton.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    RatingComponent,
    AsyncPipe,
    TitleCasePipe,
    ProductCardSkeletonComponent,
    PaginationComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0, transform: 'translateY(20px)' })],
          { optional: true }
        ),

        query(
          ':enter',
          stagger('50ms', [
            animate('400ms ease-out', style({ opacity: 1, transform: 'none' })),
          ]),
          { optional: true }
        ),

        query(
          ':leave',
          stagger(-50, [
            animate(
              '200ms ease-in',
              style({ opacity: 0, transform: 'translateY(20px)' })
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ProductListComponent implements OnInit {
  private readonly productListFacadeService: ProductListFacadeService = inject(
    ProductListFacadeService
  );

  readonly products$ = this.productListFacadeService.products$;
  readonly isLoading$ = this.productListFacadeService.isLoading$;
  readonly pagination$ = this.productListFacadeService.pagination$;
  readonly categoryTitle$ = this.productListFacadeService.categoryTitle$;

  ngOnInit(): void {
    this.productListFacadeService.showBestsellers();

  }

  onChangePage(page: number): void {
    this.productListFacadeService.changePage(page);
  }

  protected addToCart(productId: string): void {
    this.productListFacadeService.addToCart(productId);
  }
}
