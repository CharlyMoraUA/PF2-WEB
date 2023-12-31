/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { CandidatoEditarComponent } from './candidatoEditar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { element } from 'protractor';

describe('CandidatoEditarComponent', () => {
  let component: CandidatoEditarComponent;
  let fixture: ComponentFixture<CandidatoEditarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        MatDialogModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ CandidatoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title', () => {
    expect(debug.query(By.css('h4')).attributes["class"]).toEqual("card-title");
  });

  it('change language', ()  => {
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#sel-lang')).nativeElement;
    select.value = select.options[1].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it('should invoke consultarInfo', () => {
    const spyConsultarInfo = spyOn(component, 'consultarInfo').and.callThrough();
    component.consultarInfo(1);
    expect(spyConsultarInfo).toHaveBeenCalled();
   });

  







});
