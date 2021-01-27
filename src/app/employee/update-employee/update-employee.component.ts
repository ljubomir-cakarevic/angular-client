import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Employee } from 'src/app/model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/_services/dialog.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: any;
  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){

    this.dialogService.openUpdateDialog('Update employee?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
            console.log(data);
            this.goToEmployeeList();
          });
          this.notificationService.success('Successfully updated!');
        }
      });
  
    /* this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
      //this.reloadPage();
    }
    , error => console.log(error)); */
  }

  

  goToEmployeeList() {
    this.router.navigate(['/employee']);
  }

  reloadPage(): void {
    window.location.reload();
  }
}
