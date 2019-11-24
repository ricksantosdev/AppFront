import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse, HttpHeaders } from '@angular/common/http';
import { map, take } from "rxjs/operators"; 
import { Order } from './order';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }

  private readonly ROOTAPI = ' https://localhost:44336/api/order/';
  private readonly GETORDER = 'getorder/';
  private readonly GETLIST = 'getlist/';
  private readonly UPDATESTATUS = 'update/';




  getOrder(id){
    return this.http.get<Order>(this.ROOTAPI + this.GETORDER+ id);
  }

  getList(id){
    return this.http.get<Product[]>(this.ROOTAPI + this.GETLIST+ id);
  }

  updateStatusOrder(order){
    console.log(order);
    return this.http.put(`${this.ROOTAPI}${this.UPDATESTATUS}${order.OrderId}`, JSON.stringify(order.Status) , httpOptions).pipe(take(1));
  }


}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })};
