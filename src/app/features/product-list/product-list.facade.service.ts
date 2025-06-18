import { inject, Injectable } from "@angular/core";
import { ProductListApiService } from "./product-list.api.service";

@Injectable({providedIn: 'root'})
export class ProductListFacadeService {
    productListApiService: ProductListApiService = inject(ProductListApiService);
}