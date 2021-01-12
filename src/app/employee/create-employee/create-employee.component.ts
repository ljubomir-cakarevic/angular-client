import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from  'src/app/_services/employee.service';
;
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
      this.reloadPage();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employee']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  reloadPage(): void {
    window.location.reload();
    
  }
}
