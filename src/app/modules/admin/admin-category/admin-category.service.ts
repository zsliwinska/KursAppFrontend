import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCategoryNamesDto } from '../common/dto/AdminCategoryNamesDto';
import { HttpClient } from '@angular/common/http';
import { AdminCategory } from './model/adminCategory';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {


  constructor(private http: HttpClient) { }
  
  getCategories(): Observable<Array<AdminCategoryNamesDto>>{
    return this.http.get<Array<AdminCategoryNamesDto>>("/api/admin/categories");
  }
  
  createCategory(value: any): Observable<AdminCategory> {
    return this.http.post<AdminCategory>("/api/admin/categories", value);
  }
  
  getCategory(id: number) {
    return this.http.get<AdminCategory>("/api/admin/categories/"+ id);
  }

  saveProduct(id: number, value: any,): Observable<AdminCategory>{
    return this.http.put<AdminCategory>("/api/admin/categories/"+ id, value);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>("/api/admin/categories/"+ id);
  }
}
