import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private httpClient: HttpClient) { }

  getCases() {
    console.log("jada")
    console.log(this.httpClient.get('http://localhost:8080/case'))
    return this.httpClient.get('http://localhost:8080/case');
  }
}
