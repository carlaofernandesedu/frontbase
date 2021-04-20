import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  fluxots:string = 'componenteTS';
  fluxohtmlts:string = 'componenteHTMLTS';
  name = 'Carlos Teste';
  employee = [];

  constructor() {  
    //setTimeout(()=>{this.fluxots = 'somenteTS alterado'},3000);
  }

  addEmployee(){
    this.employee.push(this.name);
    console.log(this.employee);
  }

  addEmployeeComEvento(event){
      console.log(event); 
      this.addEmployee();
  }

  ngOnInit(): void {
  }

}
