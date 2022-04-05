import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSelectionComponent } from './loan-selection.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import {NgxMaskModule} from "ngx-mask";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LoanSelectionComponent', () => {
  let component: LoanSelectionComponent;
  let fixture: ComponentFixture<LoanSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanSelectionComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes([]), NgxMaskModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
