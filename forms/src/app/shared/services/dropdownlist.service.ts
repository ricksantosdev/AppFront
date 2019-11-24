import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class DropdownlistService {

  constructor(private http: HttpClient) { }

  getEstadoBr(){
    return this.http.get('assets/dados/arquivosbr.json')
    .pipe(map(result => HttpResponse))
    .subscribe(dados => { console.log(dados) });
  }
}
