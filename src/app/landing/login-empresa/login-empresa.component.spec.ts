import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { LoginEmpresaComponent } from './login-empresa.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('LoginEmpresaComponent', () => {
  let component: LoginEmpresaComponent;
  let fixture: ComponentFixture<LoginEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEmpresaComponent ],
      imports: [
        HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.loginEmpresaForm.contains('usuario')).toBeTruthy();
    expect(component.loginEmpresaForm.contains('clave')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.loginEmpresaForm.controls['usuario'].setValue(faker.datatype.string());
    component.loginEmpresaForm.controls['clave'].setValue('');
    expect(component.loginEmpresaForm.invalid).toBeTruthy();
  });

  it('should be true when valid form', () => {
    component.loginEmpresaForm.controls['usuario'].setValue(faker.datatype.string());
    component.loginEmpresaForm.controls['clave'].setValue(faker.datatype.string());
    expect(component.loginEmpresaForm.valid).toBeTruthy();
  });
});
