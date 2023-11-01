/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { CrearEmpresaComponent } from './crear-empresa.component';
import { TranslateModule } from '@ngx-translate/core';


describe('CrearEmpresaComponent', () => {
  let component: CrearEmpresaComponent;
  let fixture: ComponentFixture<CrearEmpresaComponent>;
  let debug: DebugElement;
  let h4: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ CrearEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 12 controls', () => {
    expect(component.crearEmpresaForm.contains('empresa_tipo_doc')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('empresa_num_doc')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('empresa_nombre')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('empresa_telefono')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('empresa_email')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('representante_tipo_doc')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('representante_num_doc')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('representante_nombre')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('representante_telefono')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('representante_email')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('representante_usuario')).toBeTruthy();
    expect(component.crearEmpresaForm.contains('representante_clave')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.crearEmpresaForm.controls['empresa_nombre'].setValue(faker.datatype.string());
    component.crearEmpresaForm.controls['empresa_tipo_doc'].setValue('');
    component.crearEmpresaForm.controls['empresa_num_doc'].setValue('');
    component.crearEmpresaForm.controls['empresa_telefono'].setValue(faker.datatype.string());
    component.crearEmpresaForm.controls['empresa_email'].setValue(faker.datatype.string());
    component.crearEmpresaForm.controls['representante_tipo_doc'].setValue('');
    component.crearEmpresaForm.controls['representante_num_doc'].setValue('');
    component.crearEmpresaForm.controls['representante_nombre'].setValue('');
    component.crearEmpresaForm.controls['representante_telefono'].setValue(faker.datatype.string());
    component.crearEmpresaForm.controls['representante_email'].setValue(faker.datatype.string());
    component.crearEmpresaForm.controls['representante_usuario'].setValue('');
    component.crearEmpresaForm.controls['representante_clave'].setValue('');
    expect(component.crearEmpresaForm.invalid).toBeTruthy();
  });

  it('should be true when valid form', () => {
    component.crearEmpresaForm.controls['empresa_nombre'].setValue(faker.company.companyName());
    component.crearEmpresaForm.controls['empresa_tipo_doc'].setValue('NIT');
    component.crearEmpresaForm.controls['empresa_num_doc'].setValue(faker.random.numeric(10));
    component.crearEmpresaForm.controls['empresa_telefono'].setValue(faker.phone.phoneNumber("333333333"));
    component.crearEmpresaForm.controls['empresa_email'].setValue(faker.internet.email());
    component.crearEmpresaForm.controls['representante_tipo_doc'].setValue('CC');
    component.crearEmpresaForm.controls['representante_num_doc'].setValue(faker.random.numeric(10));
    component.crearEmpresaForm.controls['representante_nombre'].setValue(faker.name.firstName()+" "+faker.name.lastName());
    component.crearEmpresaForm.controls['representante_telefono'].setValue(faker.phone.phoneNumber("333333333"));
    component.crearEmpresaForm.controls['representante_email'].setValue(faker.internet.email());
    component.crearEmpresaForm.controls['representante_usuario'].setValue(faker.internet.userName());
    component.crearEmpresaForm.controls['representante_clave'].setValue(faker.internet.password());
    expect(component.crearEmpresaForm.valid).toBeTruthy();
  });

});
