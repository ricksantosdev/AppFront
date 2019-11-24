import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order } from '../order';
import { OrderService } from '../order.services';

@Injectable({
  providedIn: 'root'
})
export class OrderResolverGuard implements Resolve<Order> {
  constructor(private service: OrderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    if (route.params && route.params['id']) {
      return this.service.getOrder(route.params['id']);
    }

    return of({
        OrderId:null,
        CreateAt:null,
        UpdateAt:null,
        Status:null,
        ClientId:null,
        Client:null
    });

  }
}
