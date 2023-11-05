
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader
        }
      })
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

});
