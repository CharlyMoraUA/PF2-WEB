/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { CandidatoInfoTecnicaComponent } from './candidatoInfoTecnica.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 

describe('CandidatoInfoTecnicaComponent', () => {
  let component: CandidatoInfoTecnicaComponent;
  let fixture: ComponentFixture<CandidatoInfoTecnicaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ CandidatoInfoTecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoInfoTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create headers of table ', () => {
    expect(debug.query(By.css('th')).attributes["class"]).toEqual("mat-h2");
  });

  it('should create button to add new technical info', () => {
    expect(debug.query(By.css('button')).attributes["color"]).toEqual("success");
  });

  it('should show the title', () => {
    expect(debug.query(By.css('h4')).attributes["class"]).toEqual("card-title");
  });







});
