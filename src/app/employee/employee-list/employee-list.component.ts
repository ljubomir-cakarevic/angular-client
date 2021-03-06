import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/_services/dialog.service';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'emailId', 'position', 'actions'];
  dataSource:any;
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private dialog: MatDialog, 
    private dialogService: DialogService,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.dataSource = data;
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {

    this.dialogService.openDeleteDialog('Delete employee?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.employeeService.deleteEmployee(id).subscribe(data => {
            console.log(data);
            this.getEmployees();
          });
          this.notificationService.warn('Successfully deleted!');
        }
      });
  }

}





