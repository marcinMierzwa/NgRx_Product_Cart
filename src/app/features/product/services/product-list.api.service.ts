import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { PaginatedResponse } from '../../../shared/models/paginated-response.model';

@Injectable({ providedIn: 'root' })
export class ProductListApiService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly basicUrl = 'http://localhost:3000/products';

  getProducts(queryParams?: { [key: string]: any }):Observable<PaginatedResponse<Product>> {
    let httpParams = new HttpParams();

    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, queryParams[key]);
        }
      }
    }

    return this.httpClient
      .get<PaginatedResponse<Product>>(`${this.basicUrl}`, { params: httpParams })
  }
}
