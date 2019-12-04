import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    var observable=this.service.Select();
    observable.subscribe((result)=>{
      console.log(result);
      this.employees=result;
    })
  }

}
