import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { map } from "rxjs/operators"; 

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any =  {
    nome:null,
    email:null,
    cep:null
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    
    this.http.post('https://httpbin.org/post' , JSON.stringify(form.value))
        .pipe(map(result => result))
        .subscribe(dados => {
          console.log(dados);
          this.resetar(form);
        }
          
      );
  }

  resetar(form){
    form.form.reset();
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  consultaCep(cep, form){

    cep = cep.replace(/\D/g, '');

    if (cep != "") {

      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {
         this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(result => result))
            .subscribe(dados => this.popularCampos(dados , form));
       
      }

    }
  }

  popularCampos(dados , formulario){
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

    formulario.form.patchValue({
      endereco:{
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    }
    });


  }

}
