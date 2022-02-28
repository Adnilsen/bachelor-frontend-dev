import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrokerService {
  constructor() {}

  getBrokers() {
    return [
      'Krogsveen',
      'Privatmegleren',
      'Aktiv Eiendomsmegling',
      'DnB Eiendom',
      'Eiendomsmegler 1',
      'Eiendomsmegler Vest',
      'Nordvik',
    ];
  }
}
