import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CategoriesApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly basicUrl = 'http://localhost:3001/catergories';


    getCatergories(): Observable<string[]> {
        return this.httpClient.get<string[]>(this.basicUrl);
    }


}