import { inject, Injectable, Signal } from "@angular/core";
import { ProductListApiService } from "./product-list.api.service";
import { ProductModel } from "../../models/product.model";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({providedIn: 'root'})
export class ProductListFacadeService {
    private readonly productListApiService: ProductListApiService = inject(ProductListApiService);
    public readonly products: Signal<ProductModel[]> = toSignal(this.productListApiService.getProducts(), {initialValue: []});
}