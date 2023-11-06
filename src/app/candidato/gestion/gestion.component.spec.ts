import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCandidatoComponent } from './gestion.component';

describe('GestionComponent', () => {
  let component: GestionCandidatoComponent;
  let fixture: ComponentFixture<GestionCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
