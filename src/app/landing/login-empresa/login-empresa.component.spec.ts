import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmpresaComponent } from './login-empresa.component';
import { FormBuilder } from '@angular/forms';

describe('LoginEmpresaComponent', () => {
  let component: LoginEmpresaComponent;
  let fixture: ComponentFixture<LoginEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEmpresaComponent ],
      providers: [
        FormBuilder
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
});
