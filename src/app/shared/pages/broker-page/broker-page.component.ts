import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrokerService } from '../../../core/broker/broker.service';
import { Router } from '@angular/router';
import { Broker } from '../../interfaces/broker.interface';

@Component({
  selector: 'app-broker-page',
  templateUrl: './broker-page.component.html',
  styleUrls: ['./broker-page.component.scss'],
})
export class BrokerPageComponent implements OnInit {
  loading!: boolean;

  form!: FormGroup;

  brokerControl = new FormControl('', Validators.required);

  requiredConfirmController = new FormControl('', Validators.requiredTrue);

  brokers: Broker[] = [];

  constructor(private brokerService: BrokerService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      broker: this.brokerControl,
      confirmedContractData: this.requiredConfirmController
    });

    this.brokerService.getBrokers().subscribe((brokers) => {
      this.loading = false;
      this.brokers = brokers;
    });

  }

  isClicked: boolean = false;

  exit() {
    this.router.navigate(['']);
  }

  next() {
    this.form.get('broker')?.markAsTouched();
    if (this.form.valid) {
      localStorage.setItem('broker', JSON.stringify({
        brokerId: this.form.get('broker')?.value.id,
        name: this.form.get('broker')?.value.name,
      }));
      this.router.navigate(['collateral']);
    }

    this.isClicked = true;

  }
}
