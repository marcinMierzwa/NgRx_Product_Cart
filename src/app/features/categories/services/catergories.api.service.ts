import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";
import { CategoryDto } from "../models/catergory.model.dto";

@Injectable({providedIn: 'root'})
export class CategoriesApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly basicUrl = 'http://localhost:3001/categories';


    getCatergories(): Observable<CategoryDto[]> {
        return this.httpClient.get<Category[]>(this.basicUrl);
    }


}