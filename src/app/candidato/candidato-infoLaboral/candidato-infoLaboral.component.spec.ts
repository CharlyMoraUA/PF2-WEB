/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';

import { CandidatoInfoLaboralComponent } from './candidato-infoLaboral.component';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EMPTY } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

describe('CandidatoInfoLaboralComponent', () => {
  let component: CandidatoInfoLaboralComponent;
  let fixture: ComponentFixture<CandidatoInfoLaboralComponent>;
  let candidatoInfoLaboralComponentSpy: jasmine.SpyObj<CandidatoInfoLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),
        MatDialogModule,
        MatIconModule
      ],
      declarations: [ CandidatoInfoLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoInfoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create with table for data', () => {
    const addItemDebugElement = fixture.debugElement.query(By.css('.tabla-info-laboral-actual'));
    expect(addItemDebugElement).toBeTruthy();
  });

  it('change language', ()  => {
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#sel-lang')).nativeElement;
    select.value = select.options[1].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it('open dialog test', () => {
    const openDialogSpy = spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => EMPTY} as any);
 
    component.openDialog();
 
    expect(openDialogSpy).toHaveBeenCalled();
   });

   it('should invoke guardarInfoLaboral', () => {
    const spyGuardarInfoLaboral = spyOn(component, 'guardarInfoLaboral').and.callThrough();
    component.guardarInfoLaboral();
    expect(spyGuardarInfoLaboral).toHaveBeenCalled();
   });

});
