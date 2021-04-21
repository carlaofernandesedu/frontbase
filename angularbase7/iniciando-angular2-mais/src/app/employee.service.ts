import { Injectable } from '@angular/core';

export interface Employee{
  name:string,
  salary:number
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  constructor() { }

  addEmployee(emp:Employee)
  {
    this.employees.push(emp);
  }
}
