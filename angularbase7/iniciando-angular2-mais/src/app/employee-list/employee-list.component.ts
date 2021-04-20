import { Component, OnInit } from '@angular/core';
import employeesglobal from '../employeesglobal';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  employees = employeesglobal;

  ngOnInit(): void {
  }

  getStyleColorSalary(employee)
  {
      return employee.salary > 200 ? 'green' : 'black';
      //mesma coisa return employee.salary > 200 ? 'green' : null 
  }

  getClassSalary(employee)
  {
      return employee.salary > 200 ? {'salary-expensive':true} : {'salary-cheap':true};
  }

}
