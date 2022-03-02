import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPageComponent } from './broker-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('BrokerPageComponent', () => {
  let component: BrokerPageComponent;
  let fixture: ComponentFixture<BrokerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrokerPageComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
