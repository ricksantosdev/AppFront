import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators"; 
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  private readonly API = 'https://localhost:44336/api/client/getclient/';

  getClient(id){
    return this.http.get<Client>(this.API + id);
  }
}
