import { Component, OnInit } from '@angular/core';
import employeesglobal from '../employeesglobal';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  fluxots:string = 'componenteTS';
  fluxohtmlts:string = 'componenteHTMLTS';
  name:string = '';
  salary:number = 0;
  employees = employeesglobal;

  constructor() {  
    //setTimeout(()=>{this.fluxots = 'somenteTS alterado'},3000);
  }

  addEmployee(){
    this.employees.push({name:this.name,salary:this.salary});
    console.log(this.employees);
  }

  addEmployeeComEvento(event){
      console.log(event); 
      this.addEmployee();
  }

  ngOnInit(): void {
  }

}
