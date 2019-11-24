import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {

    this.formulario = new FormGroup({
      //adicionando validadores dentro do construção de tipo
      nome: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(150)]),
      email: new FormControl(null, [Validators.required, Validators.email]),

      endereco: new FormGroup({
        cep: new FormControl(null, [Validators.required]),
        numero: new FormControl(null, Validators.required),
        complemento: new FormControl(null),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl(null, Validators.required),
        cidade: new FormControl(null, Validators.required),
        estado: new FormControl(null, Validators.required)
      })
    });
  }


  onSubmit() {
    if(this.formulario.valid){
      
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map(result => result))
      .subscribe(dados => {
        console.log(dados);
        this.resetar();

      },
        (error: any) => alert('erro no formulario')
      );
    }else{
      this.verificaTodosCampos(this.formulario);
      console.log('invalido');
    }
  }

  verificaTodosCampos(formGroup: FormGroup){

    Object.keys(formGroup.controls).forEach(campo => {
      
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      
      if(controle instanceof FormGroup){
        this.verificaTodosCampos(controle);
      }
      
    });
    
    

  }
  
  
  
  
  
  resetar() {
    this.formulario.reset();
  }

  VerificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');

    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }


  consultaCep() {
    let cep = this.formulario.get('endereco.cep').value;

    cep = cep.replace(/\D/g, '');

    if (cep != "") {

      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(result => result))
          .subscribe(dados => this.popularCampos(dados));

      }

    }
  }

  popularCampos(dados) {
    //ele tem um problema em caso de autocomplete vc tera que reinputar os valores
    /*formulario.setValue({
      nome:formulario.value.nome,
      email:formulario.value.email,
      endereco:{
          rua: dados.logradouro,
          cep: dados.cep,
          numero:'',
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
      }
    });   */

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.formulario.get('nome').setValue('Ricardo Santos de Jesus');


  }


}