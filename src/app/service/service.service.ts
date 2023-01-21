import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  apiurl = 'http://localhost:24012/api/Employee';
  empdata: any;
  GetData() {
    return this.http.get(this.apiurl);
    
  }
  

  SaveData(empdata: any) {
    return this.http.post(this.apiurl, empdata);
  }

  GetEmployeeById(id: any) {
    return this.http.get(this.apiurl + '/' + id);
  }

  RemoveEmployee(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }
}
