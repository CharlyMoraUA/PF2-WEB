/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { faker } from '@faker-js/faker';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { EMPTY } from 'rxjs';
import { Proyecto } from 'app/empresa/representaciones/proyecto';
import { CrearHojaTrabajoComponent } from './crear-hoja-trabajo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CrearHojaTrabajoComponent', () => {
  let component: CrearHojaTrabajoComponent;
  let fixture: ComponentFixture<CrearHojaTrabajoComponent>;
  let proyectoMock: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useClass: TranslateFakeLoader
            }
          })
      ],
      declarations: [ CrearHojaTrabajoComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHojaTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.crearHojaTrabajoForm.contains('nombre_trabajo')).toBeTruthy();
    expect(component.crearHojaTrabajoForm.contains('descripcion_candidato_ideal')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.crearHojaTrabajoForm.controls['nombre_trabajo'].setValue("");
    component.crearHojaTrabajoForm.controls['descripcion_candidato_ideal'].setValue("");
    expect(component.crearHojaTrabajoForm.invalid).toBeTruthy();
  });

  it('should be true when valid form', () => {
    component.crearHojaTrabajoForm.controls['nombre_trabajo'].setValue(faker.datatype.string());
    component.crearHojaTrabajoForm.controls['descripcion_candidato_ideal'].setValue(faker.datatype.string());
    expect(component.crearHojaTrabajoForm.valid).toBeTruthy();
  });

  it('change language', ()  => {
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#sel-lang')).nativeElement;
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it('should invoke isAllSelected', () => {
    const spyisAllSelected = spyOn(component, 'isAllSelected').and.callThrough();
    component.isAllSelected();
    expect(spyisAllSelected).toHaveBeenCalled();
   });

   it('should invoke masterToggle', () => {
    const spymasterToggle = spyOn(component, 'masterToggle').and.callThrough();
    component.masterToggle();
    expect(spymasterToggle).toHaveBeenCalled();
   });

   it('should invoke masterToggle', () => {
    const spyreloadComponent = spyOn(component, 'reloadComponent').and.callThrough();
    component.reloadComponent(true);
    expect(spyreloadComponent).toHaveBeenCalled();
   });   
});
