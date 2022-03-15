import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPageComponent } from './broker-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Broker } from '../../interfaces/broker.interface';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CollateralPageComponent } from '../collateral/collateral-page/collateral-page.component';
import { Router } from '@angular/router';

describe('BrokerPageComponent', () => {
  let component: BrokerPageComponent;
  let fixture: ComponentFixture<BrokerPageComponent>;
  let po: PageObject;
  let router: Router;
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);
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
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerPageComponent);
    component = fixture.componentInstance;
    component.brokers = initialState.brokers;
    po = new PageObject(fixture);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check form validety on start', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should check size on list of brokers', () => {
    expect(component.brokers.length).toBe(2);
  });

  it('should check broker validety', () => {
    let broker = component.form.controls['broker'];
    expect(broker.valid).toBeFalsy();
  });

  it('should choose broker', () => {
    let broker = component.form.controls['broker'];
    po.getBrokerDropdown.nativeElement.click();
    fixture.detectChanges();
    // List contains brokers + choose none option
    expect(po.getBrokerElement.length).toBe(3);

    po.getBrokerElement[1].nativeElement.click();
    fixture.detectChanges();
    let text = po.getBrokerElement[1].nativeElement.innerText;
    broker.setValue(text);
    expect(broker.value).toBe('Nordvik');
    expect(broker.valid).toBeTruthy();
  });

  it('should navigate to collateral page', () => {
    let broker = component.form.controls['broker'];
    broker.setValue('Nordvik');
    fixture.detectChanges();
    po.getnextButton.nativeElement.click();
    fixture.detectChanges();
    const spy = router.navigate as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs[0]).toBe('collateral');
  });

  class PageObject {
    constructor(private fixture: ComponentFixture<BrokerPageComponent>) {}

    get getBrokerDropdown(): DebugElement {
      return fixture.debugElement.query(By.css('mat-select'));
    }

    get getBrokerElement(): DebugElement[] {
      return fixture.debugElement.queryAll(By.css('mat-option'));
    }

    get getnextButton(): DebugElement {
      return fixture.debugElement.query(By.css('.nextBtn'));
    }
  }
});
