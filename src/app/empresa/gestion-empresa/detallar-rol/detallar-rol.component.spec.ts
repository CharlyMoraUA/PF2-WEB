import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallarRolComponent } from './detallar-rol.component';

describe('DetallarRolComponent', () => {
  let component: DetallarRolComponent;
  let fixture: ComponentFixture<DetallarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
