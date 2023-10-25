import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductSelectionComponent } from './product-selection/product-selection.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProductDetails(productId: number): Observable<ProductSelectionComponent[]> {
    return this.http.get<ProductSelectionComponent[]>(`${this.baseUrl}/${productId}/details`);
  }

  getProductFeatures(productId: number): Observable<ProductSelectionComponent[]> {
    return this.http.get<ProductSelectionComponent[]>(`${this.baseUrl}/${productId}/features`);
  }
}
