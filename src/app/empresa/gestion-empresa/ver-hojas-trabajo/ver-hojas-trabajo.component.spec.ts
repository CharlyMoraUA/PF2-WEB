import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { VerHojasTrabajoComponent } from './ver-hojas-trabajo.component';
import { ConsultarProyectosService } from 'app/empresa/consultar-proyectos.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('VerHojasTrabajoComponent', () => {
  let component: VerHojasTrabajoComponent;
  let fixture: ComponentFixture<VerHojasTrabajoComponent>;
  let mockConsultaProyectosService: jasmine.SpyObj<ConsultarProyectosService>;
  let mockRouter, mockToastr, mockTranslateService;

  beforeEach(() => {
    mockConsultaProyectosService = jasmine.createSpyObj('ConsultarProyectosService', ['consultarHojasTrabajoProyectos', 'consultarCandidatosHojasTrabajo', 'crearEvaluacionCandidato']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockToastr = jasmine.createSpyObj('ToastrService', ['success']);
    mockTranslateService = jasmine.createSpyObj('TranslateService', ['addLangs', 'setDefaultLang', 'use']);

    TestBed.configureTestingModule({
      declarations: [VerHojasTrabajoComponent],
      imports: [RouterTestingModule],
      providers: [
        FormBuilder,
        { provide: ConsultarProyectosService, useValue: mockConsultaProyectosService },
        { provide: Router, useValue: mockRouter },
        { provide: ToastrService, useValue: mockToastr },
        { provide: TranslateService, useValue: mockTranslateService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VerHojasTrabajoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and call consultarHojasTrabajo on ngOnInit', () => {
    const formBuilder = TestBed.inject(FormBuilder);
    spyOn(formBuilder, 'group').and.callThrough();
    spyOn(component, 'consultarHojasTrabajo');
  
    component.ngOnInit();

    expect(formBuilder.group).toHaveBeenCalled();
    expect(component.consultarHojasTrabajo).toHaveBeenCalledOnceWith();
  });
  
  

  it('should call consultarHojasTrabajo on ngOnInit', () => {
    spyOn(component, 'consultarHojasTrabajo');
    component.ngOnInit();
    expect(component.consultarHojasTrabajo).toHaveBeenCalledOnceWith();
  });

  it('should call consultarHojasTrabajoProyectos and update hojasDetrabajo on consultarHojasTrabajo', () => {
    const mockResponse = { hojasDetrabajo: [{ id: 1, name: 'Sheet 1' }] };
    mockConsultaProyectosService.consultarHojasTrabajoProyectos.and.returnValue(of(mockResponse));

    component.consultarHojasTrabajo();

    expect(mockConsultaProyectosService.consultarHojasTrabajoProyectos).toHaveBeenCalledOnceWith(
      sessionStorage.getItem("id_empresa"),
      sessionStorage.getItem("proyecto_editar_id"),
      sessionStorage.getItem("empresa-token")
    );
    expect(component.hojasDetrabajo).toEqual(mockResponse.hojasDetrabajo);
  });


  it('should navigate to "gestion-empresa" on goToWorksheets', () => {
    spyOn(component, 'reloadComponent');
    component.goToWorksheets();
    expect(component.reloadComponent).toHaveBeenCalledOnceWith(true);
    expect(mockRouter.navigate).toHaveBeenCalledOnceWith(['gestion-empresa']);
  });

});
