import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  apiService: ApiService = inject(ApiService);
  ngOnInit(): void {
  }

}
