import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEntrevistasComponent } from './historial-entrevistas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

describe('HistorialEntrevistasComponent', () => {
  let component: HistorialEntrevistasComponent;
  let fixture: ComponentFixture<HistorialEntrevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialEntrevistasComponent ],
      imports: [
        HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialEntrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with table for data', () => {
    const addItemDebugElement = fixture.debugElement.query(By.css('.tabla_historial_entrevista'));
    expect(addItemDebugElement).toBeTruthy();
  });
});
