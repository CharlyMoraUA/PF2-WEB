import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { ConsultarEquipoComponent } from './consultar-equipo.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConsultarEquipoComponent', () => {
  let component: ConsultarEquipoComponent;
  let fixture: ComponentFixture<ConsultarEquipoComponent>;
  let compiledElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [HttpClientTestingModule, 
      ReactiveFormsModule, 
      FormsModule,
      MatDialogModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      TranslateModule.forRoot()
    ],
      declarations: [ ConsultarEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarEquipoComponent);
    component = fixture.componentInstance;
    compiledElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should open Modal', () => {
    expect(component.openDialog(1)).toEqual(true);
  });
});
