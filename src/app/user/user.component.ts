import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'position'];
  employee: any;
  email: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    
  }

  findEmployeeByEmail() {
    
    this.employeeService.getEmployeeByEmail(this.email).subscribe(data => {
      this.employee = data;
      this.email = '';
    });
  }

  

}
