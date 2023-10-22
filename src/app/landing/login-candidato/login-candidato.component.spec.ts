/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { LoginCandidatoComponent } from './login-candidato.component';

describe('LoginCandidatoComponent', () => {
  let component: LoginCandidatoComponent;
  let fixture: ComponentFixture<LoginCandidatoComponent>;
  let debug: DebugElement;
  let h4: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ LoginCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.loginCandidatoForm.contains('usuario')).toBeTruthy();
    expect(component.loginCandidatoForm.contains('clave')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.loginCandidatoForm.controls['usuario'].setValue(faker.datatype.string());
    component.loginCandidatoForm.controls['clave'].setValue('');
    expect(component.loginCandidatoForm.invalid).toBeTruthy();
  });

  it('should be true when valid form', () => {
    component.loginCandidatoForm.controls['usuario'].setValue(faker.datatype.string());
    component.loginCandidatoForm.controls['clave'].setValue(faker.datatype.string());
    expect(component.loginCandidatoForm.valid).toBeTruthy();
  });
});
