import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEntrevistasComponent } from './historial-entrevistas.component';

describe('HistorialEntrevistasComponent', () => {
  let component: HistorialEntrevistasComponent;
  let fixture: ComponentFixture<HistorialEntrevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialEntrevistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialEntrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
