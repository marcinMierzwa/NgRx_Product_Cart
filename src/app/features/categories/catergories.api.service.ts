import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryModel } from "./models/category.model";

@Injectable({providedIn: 'root'})
export class CategoriesApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly basicUrl = 'http://localhost:3001/categories';


    getCatergories(): Observable<CategoryModel[]> {
        return this.httpClient.get<CategoryModel[]>(this.basicUrl);
    }


}