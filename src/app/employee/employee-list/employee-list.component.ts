import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //employee: Employee = new Employee();
  //employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId'];
  dataSource:any;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
     this.getEmployees(); 
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.dataSource = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
