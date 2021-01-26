import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../_services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  // using Fixture we can access the component's class properties as well as template elements
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    // creating Module enviroment with configureTestingModule method (import components, providers...)
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

