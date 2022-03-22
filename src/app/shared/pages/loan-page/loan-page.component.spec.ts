import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPageComponent } from './loan-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoanPageComponent', () => {
  let component: LoanPageComponent;
  let fixture: ComponentFixture<LoanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanPageComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
