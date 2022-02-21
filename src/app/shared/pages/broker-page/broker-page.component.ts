import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-broker-page',
  templateUrl: './broker-page.component.html',
  styleUrls: ['./broker-page.component.scss'],
})
export class BrokerPageComponent implements OnInit {
  loading!: boolean;

  form!: FormGroup;

  brokerControl = new FormControl('', Validators.required);

  brokers = ['Krogsveen', 'Privatmegleren'];

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      broker: this.brokerControl,
    });
    this.loading = false;
  }

  next() {
    if (this.form.valid) {
      console.log(this.brokerControl.value);
    }
  }
}
