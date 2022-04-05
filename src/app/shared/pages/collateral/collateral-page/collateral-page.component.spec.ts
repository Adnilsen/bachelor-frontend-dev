import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CollateralPageComponent } from './collateral-page.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CollateralPageComponent', () => {
  let component: CollateralPageComponent;
  let fixture: ComponentFixture<CollateralPageComponent>;
  const initialState = {
    postName: {
      result: "Langhus",
      valid: true,
      postalCodeType: "-"
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollateralPageComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralPageComponent);
    component = fixture.componentInstance;
    component.postName = initialState.postName;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
