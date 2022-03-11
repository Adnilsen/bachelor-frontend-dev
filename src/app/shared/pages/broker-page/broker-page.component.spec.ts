import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPageComponent } from './broker-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Broker } from '../../interfaces/broker.interface';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CollateralPageComponent } from '../collateral/collateral-page/collateral-page.component';

interface SharedTestData {
  fixture: ComponentFixture<BrokerPageComponent>;
  component: BrokerPageComponent;
}

describe('BrokerPageComponent', () => {
  let component: BrokerPageComponent;
  let fixture: ComponentFixture<BrokerPageComponent>;
  let po: PageObject;
  const initialState = {
    brokers: [
      {
        name: 'Nordvik',
        brokerId: 1,
      },
      {
        name: 'DnB',
        brokerId: 2,
      },
    ] as Broker[],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrokerPageComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'broker', component: BrokerPageComponent },
          { path: 'collateral', component: CollateralPageComponent },
        ]),
        TranslateModule.forRoot(),
        HttpClientModule,
      ],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerPageComponent);
    component = fixture.componentInstance;
    component.brokers = initialState.brokers;
    po = new PageObject(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check size on list of brokers', () => {
    expect(component.brokers.length).toBe(2);
  });

  it('should choose broker', () => {
    po.getBrokerDropdown.nativeElement.click();
    fixture.detectChanges();
    expect(po.getBrokerElement.length).toBe(3);
    po.getBrokerElement[1].nativeElement.click();
    fixture.detectChanges();
    console.log(component.form.get('broker'));
  });

  it('should navigate to collateral page', () => {});

  class PageObject {
    constructor(private fixture: ComponentFixture<BrokerPageComponent>) {}

    get getBrokerDropdown(): DebugElement {
      return fixture.debugElement.query(By.css('mat-select'));
    }

    get getBrokerElement(): DebugElement[] {
      return fixture.debugElement.queryAll(By.css('mat-option'));
    }

    get getnextButton(): DebugElement {
      return fixture.debugElement.query(By.css('.mat-primary'));
    }
  }
});
