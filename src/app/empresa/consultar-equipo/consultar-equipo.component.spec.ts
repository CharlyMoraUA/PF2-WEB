import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

import { ConsultarEquipoComponent } from './consultar-equipo.component';

describe('ConsultarEquipoComponent', () => {
  let component: ConsultarEquipoComponent;
  let fixture: ComponentFixture<ConsultarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ ConsultarEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
