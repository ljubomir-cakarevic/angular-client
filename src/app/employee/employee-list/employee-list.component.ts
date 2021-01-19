import {  AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Employee } from 'src/app/model/employee';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements  OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId', 'actions'];
  dataSource:any;
 
  @ViewChild(MatSort, {static: true}) sort: MatSort | any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | any;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }


  ngOnInit(): void {
    this.getEmployees();
    
   
  }

  /* ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  } */


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
