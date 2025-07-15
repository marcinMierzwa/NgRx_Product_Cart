import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<ProductModel>();
}
