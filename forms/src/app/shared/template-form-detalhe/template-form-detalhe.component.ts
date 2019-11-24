import { Component, OnInit, Input } from '@angular/core';
import { format } from 'util';

@Component({
  selector: 'app-template-form-detalhe',
  templateUrl: './template-form-detalhe.component.html',
  styleUrls: ['./template-form-detalhe.component.css']
})
export class TemplateFormDetalheComponent implements OnInit {

  @Input() form;
  
  constructor() { }

  ngOnInit() {
  }

}
