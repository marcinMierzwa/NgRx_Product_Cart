import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { ProductDto } from "../models/product.model.dto";

@Injectable({providedIn: 'root'})
export class ProductListApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly basicUrl = 'http://localhost:3001/products';


    getProducts(queryParams?: { [key: string]: any }): Observable<Product[]> {
    let httpParams = new HttpParams();

    // 3. Jeśli przekazano parametry, dodaj je do HttpParams
    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, queryParams[key]);
        }
      }
    }

    // 4. Przekaż `httpParams` jako opcję 'params' do metody .get()
    return this.httpClient.get<ProductDto[]>(this.basicUrl, { params: httpParams });
  }
}



