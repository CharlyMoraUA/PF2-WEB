/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultadosEntrevistasComponent } from './resultadosEntrevistas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Entrevista } from 'app/candidato/representaciones/entrevista';

describe('ResultadosEntrevistasComponent', () => {
  let component: ResultadosEntrevistasComponent;
  let fixture: ComponentFixture<ResultadosEntrevistasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ ResultadosEntrevistasComponent ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosEntrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title', () => {
    expect(debug.query(By.css('h4')).attributes["class"]).toEqual("card-title");
  });

  it('should create button to get interview results', () => {
    expect(debug.query(By.css('button')).attributes["type"]).toEqual("submit");
  });

  it('should show input to select document type candidate', () => {
    expect(debug.query(By.css('option')).attributes["value"]).toEqual("cc");
  });

  it('should show input to put document number candidate', () => {
    expect(debug.query(By.css('input')).attributes["formControlName"]).toEqual("num_doc");
  });

  it('change language', ()  => {
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#sel-lang')).nativeElement;
    select.value = select.options[1].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it('should invoke obtenerResultados', () => {
    const spyConsultarEntrevistas = spyOn(component, 'obtenerResultados').and.callThrough();
    component.obtenerResultados(Entrevista);
    expect(spyConsultarEntrevistas).toHaveBeenCalled();
   });


});
