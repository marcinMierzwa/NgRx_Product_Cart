import { inject, Injectable } from "@angular/core";
import { ProductListApiService } from "../product-list/product-list.api.service";

@Injectable({providedIn: 'root'})
export class CategoriesFacadeService {
    productListApiService: ProductListApiService = inject(ProductListApiService);
}