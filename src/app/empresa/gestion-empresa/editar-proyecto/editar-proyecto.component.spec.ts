/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { faker } from '@faker-js/faker';
import { TranslateModule } from '@ngx-translate/core';
import { EditarProyectoComponent } from './editar-proyecto.component';

describe('EditarProyectoComponent', () => {
  let component: EditarProyectoComponent;
  let fixture: ComponentFixture<EditarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ EditarProyectoComponent ]
    })
    .compileComponents();
    sessionStorage.setItem("proyecto_editar", JSON.stringify({"titulo": faker.lorem.words(3), "fecha_inicio": "2021-01-01", "fecha_fin": "2021-01-01"}) )
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
