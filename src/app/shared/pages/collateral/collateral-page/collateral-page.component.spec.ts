import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralPageComponent } from './collateral-page.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CollateralPageComponent', () => {
  let component: CollateralPageComponent;
  let fixture: ComponentFixture<CollateralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollateralPageComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
