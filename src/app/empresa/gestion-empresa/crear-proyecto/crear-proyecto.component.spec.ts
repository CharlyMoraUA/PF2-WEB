/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { CrearProyectoComponent } from './crear-proyecto.component';
import { faker } from '@faker-js/faker';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { EMPTY } from 'rxjs';
import { Proyecto } from 'app/empresa/representaciones/proyecto';

describe('CrearProyectoComponent', () => {
  let component: CrearProyectoComponent;
  let fixture: ComponentFixture<CrearProyectoComponent>;
  let proyectoMock: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ CrearProyectoComponent ],
      providers: [
        { provide: Proyecto, useValue: proyectoMock }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 3 controls', () => {
    expect(component.crearProyectoForm.contains('titulo')).toBeTruthy();
    expect(component.crearProyectoForm.contains('fecha_inicio')).toBeTruthy();
    expect(component.crearProyectoForm.contains('fecha_fin')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.crearProyectoForm.controls['titulo'].setValue(faker.datatype.string());
    expect(component.crearProyectoForm.invalid).toBeTruthy();
  });

  it('should be true when valid form', () => {
    component.crearProyectoForm.controls['titulo'].setValue(faker.datatype.string());
    component.crearProyectoForm.controls['fecha_inicio'].setValue('2021-01-01');
    expect(component.crearProyectoForm.valid).toBeTruthy();
  });

  it('change language', ()  => {
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#sel-lang')).nativeElement;
    select.value = select.options[1].value;  // <-- select a new value
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

   it('should invoke crearProyecto', () => {
    const spycrearProyecto = spyOn(component, 'crearProyecto').and.callThrough();
    let proyectoMock = new Proyecto(1, 'titulo', new Date('2021-01-01'), new Date('2021-01-30'), [], [], []);
    component.crearProyecto(proyectoMock);
    expect(spycrearProyecto).toHaveBeenCalled();
   });
   
});
