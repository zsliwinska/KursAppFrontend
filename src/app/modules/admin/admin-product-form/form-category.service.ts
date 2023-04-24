import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminCategoryNamesDto } from '../common/dto/AdminCategoryNamesDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<AdminCategoryNamesDto>>{
    return this.http.get<Array<AdminCategoryNamesDto>>("/api/admin/categories");
  }
}
