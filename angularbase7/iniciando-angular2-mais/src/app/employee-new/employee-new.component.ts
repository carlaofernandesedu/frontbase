import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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
  

  constructor(private employeeService: EmployeeService) {  
    //setTimeout(()=>{this.fluxots = 'somenteTS alterado'},3000);
  }

  addEmployee(){
    this.employeeService.addEmployee({name:this.name,salary:this.salary});
    console.log(this.employeeService.employees);
  }

  addEmployeeComEvento(event){
      console.log(event); 
      this.addEmployee();
  }

  ngOnInit(): void {
  }

}
