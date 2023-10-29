import { ComponentFixture, TestBed } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GestionEmpresaComponent } from './gestion-empresa.component';

describe('GestionEmpresaComponent', () => {
  let component: GestionEmpresaComponent;
  let fixture: ComponentFixture<GestionEmpresaComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
