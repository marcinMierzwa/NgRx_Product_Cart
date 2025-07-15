import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../models/product.model";

interface ProductModelDto {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly category: string;
  readonly image: string;
  readonly rating: {
    readonly rate: number;
    readonly count: number;
  };
}

@Injectable({providedIn: 'root'})
export class ProductListApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly basicUrl = 'http://localhost:3001/products';


    getProducts(): Observable<ProductModel[]> {
        return this.httpClient.get<ProductModelDto[]>(this.basicUrl);
    }



}