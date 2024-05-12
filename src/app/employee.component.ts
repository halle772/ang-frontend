import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  username: string = ''; // Initialize the property here
  password: string = ''; // Initialize the property here
  employees: any[] = [];
  newEmployee: any = {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  login() {
    if (!this.username || !this.password) {
      // Handle invalid username or password
      return;
    }
    this.employeeService.login(this.username, this.password).subscribe(() => {
      this.getEmployees();
    });
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((employees: any[]) => {
      this.employees = employees;
    });
  }

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      this.newEmployee = {};
      this.getEmployees();
    });
  }

  updateEmployee(employee: any) {
    this.employeeService.updateEmployee(employee._id, employee).subscribe(() => {
      this.getEmployees();
    });
  }

  deleteEmployee(employeeId: string) {
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {
      this.getEmployees();
    });
  }
}
