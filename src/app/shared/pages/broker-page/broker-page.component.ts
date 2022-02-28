import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrokerService } from '../../../core/broker/broker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broker-page',
  templateUrl: './broker-page.component.html',
  styleUrls: ['./broker-page.component.scss'],
})
export class BrokerPageComponent implements OnInit {
  loading!: boolean;

  form!: FormGroup;

  brokerControl = new FormControl('', Validators.required);

  brokers: string[] = [];

  constructor(private brokerService: BrokerService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      broker: this.brokerControl,
    });

    this.loading = false;

    this.brokers = this.brokerService.getBrokers();
  }

  next() {
    this.form.get('broker')?.markAsTouched();
    if (this.form.valid) {
      this.router.navigate(['collateral'], { state: { broker: this.form.get('broker')?.value } });
    }
  }
}
