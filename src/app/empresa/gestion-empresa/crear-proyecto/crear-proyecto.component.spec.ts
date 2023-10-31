/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { CrearProyectoComponent } from './crear-proyecto.component';
import { faker } from '@faker-js/faker';

describe('CrearProyectoComponent', () => {
  let component: CrearProyectoComponent;
  let fixture: ComponentFixture<CrearProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ CrearProyectoComponent ]
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

});
