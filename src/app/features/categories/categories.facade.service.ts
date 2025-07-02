import { inject, Injectable } from "@angular/core";
import { CategoriesApiService } from "./catergories.api.service";
import { Observable } from "rxjs";
import { CategoryModel } from "./models/category.model";

@Injectable({providedIn: 'root'})
export class CategoriesFacadeService {
    private readonly categoriesApiService: CategoriesApiService = inject(CategoriesApiService);
    public readonly categories$: Observable<CategoryModel[]> = this.categoriesApiService.getCatergories();
}