/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CandidatoComponent } from './candidato.component';
import { Candidato } from '../candidato';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';

describe('CandidatoComponent', () => {
  let component: CandidatoComponent;
  let fixture: ComponentFixture<CandidatoComponent>;
  let debug: DebugElement;
  let h4: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ CandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoComponent);
    component = fixture.componentInstance;

    component.candidatos = [
      new Candidato(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.datetime(),
        faker.datatype.string()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dashboard element ', () => {
    expect(debug.query(By.css('h4')).attributes["class"]).toEqual("card-title");
  });

});
