import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlComponent } from '../campo-control/campo-control.component';
import { TemplateFormDetalheComponent } from '../template-form-detalhe/template-form-detalhe.component';
import { DropdownlistService } from '../services/dropdownlist.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CampoControlComponent , TemplateFormDetalheComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[CampoControlComponent , TemplateFormDetalheComponent],
  providers:[DropdownlistService]
})
export class SharedModule { }
