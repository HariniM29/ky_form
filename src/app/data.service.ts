


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = 'http://localhost:5102/api/Form'; // Adjust the URL
                                                                                                                                 
  
  constructor(public http: HttpClient) { }

  submitFormData(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  
  getColumnData() {
    return this.http.get<string[]>('http://localhost:5102/api/Form/column-data'); // Replace with your API endpoint
  }
}
