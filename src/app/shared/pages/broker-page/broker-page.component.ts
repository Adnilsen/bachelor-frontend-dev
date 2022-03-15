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

  brokers: Broker[] = [];

  constructor(private brokerService: BrokerService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      broker: this.brokerControl,
    });

    this.loading = false;

    this.brokerService.getBrokers().subscribe((brokers) => {
      this.loading = false;
      this.brokers = brokers;
    });
  }

  next() {
    this.form.get('broker')?.markAsTouched();
    if (this.form.valid) {
      this.router.navigate(['collateral']);
    }
  }
}
