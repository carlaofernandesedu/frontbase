import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  fluxots:string = 'componenteTS';
  fluxohtmlts:string = 'componenteHTMLTS';
  constructor() {  
    //setTimeout(()=>{this.fluxots = 'somenteTS alterado'},3000);
  }

  ngOnInit(): void {
  }

}
