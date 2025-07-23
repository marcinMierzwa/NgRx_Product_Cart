import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RatingComponent } from '../../../../shared/components/rating/rating.component';
import { ProductListFacadeService } from '../../services/product-list.facade.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { AsyncPipe } from '@angular/common';
import { LoadingWrapperComponent } from "../../../../shared/components/loading-wrapper/loading-wrapper.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, RatingComponent, AsyncPipe, LoadingWrapperComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  private readonly productListFacadeService: ProductListFacadeService = inject(ProductListFacadeService);

  readonly products$: Observable<Product[]> = this.productListFacadeService.products$;
  readonly isLoading$: Observable<boolean> = this.productListFacadeService.isLoading$;


    ngOnInit(): void {
      this.productListFacadeService.loadProducts();
  }

}
