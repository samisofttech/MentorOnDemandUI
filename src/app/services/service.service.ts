import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  get_response(){
    return this.httpClient.get('http://localhost:3000/services');
  }
}
