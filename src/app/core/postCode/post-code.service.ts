import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostCode} from "../../shared/interfaces/postcode.interface";

@Injectable({
  providedIn: 'root'
})
export class PostCodeService {

  constructor(private httpClient: HttpClient) { }

  getPostName(postCode: string | undefined) {
    return this.httpClient.get<PostCode>('https://fraktguide.bring.no/fraktguide/api/postalCode.json?country=no&pnr=' + postCode);
  }
}
