import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Fetch data from the database
  getData() :Observable<any>{
    return this.http.get('http://localhost:8080/api/selectpage'); // Replace with your actual API endpoint
  }
}
