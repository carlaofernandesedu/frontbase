import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  fluxots:string = 'componenteTS';
  fluxohtmlts:string = 'componenteHTMLTS';
  employee:Employee = { name:'',salary:0};
  
  
  

  constructor(private employeeService: EmployeeService) {  
    //setTimeout(()=>{this.fluxots = 'somenteTS alterado'},3000);
  }

  addEmployee(){
    const copiaEmployee = Object.assign({},this.employee);
    this.employeeService.addEmployee(copiaEmployee);
    console.log(this.employeeService.employees);
  }

  addEmployeeComEvento(event){
      console.log(event); 
      this.addEmployee();
  }

  ngOnInit(): void {
  }

}
