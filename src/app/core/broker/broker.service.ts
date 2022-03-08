import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Broker} from "../../shared/interfaces/broker.interface";

@Injectable({
  providedIn: 'root',
})
export class BrokerService {
  constructor(private httpClient : HttpClient) {}

  getBrokers() {
   /* return [
      'Krogsveen',
      'Privatmegleren',
      'Aktiv Eiendomsmegling',
      'DnB Eiendom',
      'Eiendomsmegler 1',
      'Eiendomsmegler Vest',
      'Nordvik',


    ];*/
    return this.httpClient.get<Broker[]>("http://localhost:8080/brokers");
  }
}
