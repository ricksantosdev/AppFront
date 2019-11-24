import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ClientService } from './client.services';

@Component({
  selector: 'client-form',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient, private clientService: ClientService) { }

  ngOnInit() {

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cpf: new FormControl(null),
      clientid:  new FormControl(null)
    });
  }

  GetClient(){

    let id = this.formulario.get('clientid').value;
    this.clientService.getClient(id).subscribe(dados => this.popularCampos(dados));
  }

  popularCampos(dados) {
    this.formulario.patchValue({
      nome : dados.name,
      cpf: dados.cpf
    });

  }


}