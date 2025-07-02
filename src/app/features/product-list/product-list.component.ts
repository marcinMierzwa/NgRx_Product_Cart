import { Component, inject, OnInit, Signal } from '@angular/core';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { RatingComponent } from "../../shared/components/rating/rating.component";
import { ProductModel } from '../../models/product.model';
import { ProductListFacadeService } from './product-list.facade.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, RatingComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  private readonly productListService: ProductListFacadeService = inject(ProductListFacadeService);

  readonly products: Signal<ProductModel[]> = this.productListService.products;

    ngOnInit(): void {
  }

}
