import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { ProductDto } from "../models/product.model.dto";

@Injectable({providedIn: 'root'})
export class ProductListApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly basicUrl = 'http://localhost:3001/products';


    getProducts(): Observable<Product[]> {
        return this.httpClient.get<ProductDto[]>(this.basicUrl);
    }



}