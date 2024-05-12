import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`, employee);
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }

  updateEmployee(employeeId: string, updatedEmployee: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/employees/${employeeId}`, updatedEmployee);
  }

  deleteEmployee(employeeId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/employees/${employeeId}`);
  }
}
