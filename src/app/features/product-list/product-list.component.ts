import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { RatingComponent } from "../../shared/components/rating/rating.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, RatingComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
  }

}
