import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallarRolComponent } from './detallar-rol.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import faker from '@faker-js/faker';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('DetallarRolComponent', () => {
  let component: DetallarRolComponent;
  let fixture: ComponentFixture<DetallarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
      MatFormFieldModule ,
      ReactiveFormsModule, 
      FormsModule,
      ToastrModule.forRoot(),
      TranslateModule.forRoot()
    ],
      declarations: [ DetallarRolComponent ],
      providers: [
          {provide: MatDialogRef, useValue: {}},
          {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 4 controls', () => {
    expect(component.detallarRolForm.contains('titulo')).toBeTruthy();
    expect(component.detallarRolForm.contains('descripcion')).toBeTruthy();
    expect(component.detallarRolForm.contains('blandas')).toBeTruthy();
    expect(component.detallarRolForm.contains('tecnicas')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.detallarRolForm.controls['titulo'].setValue(faker.datatype.string());
    expect(component.detallarRolForm.invalid).toBeTruthy();
  });
}); 
