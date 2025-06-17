import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../../models/product.model";
import { ProductModelDto } from "./dto/product.model.dto";

@Injectable({providedIn: 'root'})
export class ApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly basicUrl = 'http://localhost:3001';


    // get product list
    getProducts(): Observable<ProductModel[]> {
        return this.httpClient.get<ProductModelDto[]>(`${this.basicUrl}/products`);
    }

    // get product by id
    getProductById(id: string): Observable<ProductModel> {
        return this.httpClient.get<ProductModelDto>(`${this.basicUrl}/products/${id}`);
    }

    getCatergories(): Observable<string[]> {
        return this.httpClient.get<string[]>(`${this.basicUrl}/categories`);
    }


    // get product catergories
}