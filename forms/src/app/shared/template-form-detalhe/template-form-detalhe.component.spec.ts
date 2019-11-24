import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormDetalheComponent } from './template-form-detalhe.component';

describe('TemplateFormDetalheComponent', () => {
  let component: TemplateFormDetalheComponent;
  let fixture: ComponentFixture<TemplateFormDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
