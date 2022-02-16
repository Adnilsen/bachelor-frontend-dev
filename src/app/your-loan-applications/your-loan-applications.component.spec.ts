import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLoanApplicationsComponent } from './your-loan-applications.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';


describe('YourLoanApplicationsComponent', () => {
  let component: YourLoanApplicationsComponent;
  let fixture: ComponentFixture<YourLoanApplicationsComponent>;
  let httpMock: HttpClient


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ YourLoanApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourLoanApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
