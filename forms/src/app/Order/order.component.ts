import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { OrderService } from './order.services';
import { Product } from './product';
import { Order } from './order';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client/client.services';
import { Client } from '../client/client';

@Component({
  selector: 'order-form',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderFormComponent implements OnInit {

  formulario: FormGroup;
  products:Product;
  visibleGrid: boolean;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient, 
    private orderService: OrderService,
    private route:ActivatedRoute,
    private serviceClient: ClientService) { }

  ngOnInit() {

    this.formulario = new FormGroup({
      orderIdFrm: new FormControl(null,[Validators.required]),
      createAt: new FormControl(null),
      updateAt:  new FormControl(null),
      status: new FormControl(null),
      clientId: new FormControl(null),
      nomeCliente: new FormControl(null),
      cpf: new FormControl(null)

    });
  }

  GetOrder(){

    let id = this.formulario.get('orderIdFrm').value;
    this.orderService.getOrder(id) .subscribe(dados => this.popularCamposOrder(dados));
    this.visibleGrid = false;
  }

  GetListOrder(){
    let id = this.formulario.get('orderIdFrm').value;
    this.orderService.getList(id) .subscribe(dados => this.popularCamposList(dados));
  }

  popularCamposList(dados) {
    this.visibleGrid = true;
    this.products = dados;

  }

  popularCamposOrder(dados) {

    this.formulario.patchValue({
      
      orderIdFrm : dados.orderId,
      createAt: dados.createAt,
      updateAt: dados.updateAt,
      status: dados.status,
      clientId: dados.client.clientId,
      nomeCliente: dados.client.name,
      cpf: dados.client.cpf
    
    });

  
  }


  GetUpdateStatusOrder(){


    let id = this.formulario.get('orderIdFrm').value;
    let status = this.formulario.get('status').value;
    const orderData = this.route.snapshot.data['order'];
    orderData.OrderId = id;
    orderData.Status = status;
   
    this.orderService.updateStatusOrder(orderData).subscribe(
      success =>{
        this.formulario.get('status').setValue(orderData.Status);
      },
      error => console.log(orderData)
    );

    

  }

}