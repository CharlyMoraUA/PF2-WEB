import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ConsultarEquipoComponent } from './consultar-equipo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConsultarEquipoService } from '../consultar-equipo.service';
import { of, throwError } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('ConsultarEquipoComponent', () => {
  let component: ConsultarEquipoComponent;
  let fixture: ComponentFixture<ConsultarEquipoComponent>;
  let compiledElement;
  let consultarEquipoServiceSpy: jasmine.SpyObj<ConsultarEquipoService>;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
  const spyConsultarEquipoService = jasmine.createSpyObj('ConsultarEquipoService', ['obtenerEquipos', 'obtenerRoles', 'desAsociarRol', 'asociarRol']);
  const spyToastrService = jasmine.createSpyObj('ToastrService', ['success', 'error']);

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
      declarations: [ ConsultarEquipoComponent ],
      providers: [
        { provide: ConsultarEquipoService, useValue: spyConsultarEquipoService },
        { provide: ToastrService, useValue: spyToastrService }
      ]
    })
    .compileComponents();

    consultarEquipoServiceSpy = TestBed.inject(ConsultarEquipoService) as jasmine.SpyObj<ConsultarEquipoService>;
    toastrServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    fixture = TestBed.createComponent(ConsultarEquipoComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    toastrServiceSpy.error.calls.reset();
    consultarEquipoServiceSpy.obtenerRoles.calls.reset();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should load equipos on initialization', () => {
    const equipos = [{ id: 1, name: 'Equipo 1' }];
    consultarEquipoServiceSpy.obtenerEquipos.and.returnValue(of({ fichas: equipos }));

    component.ngOnInit();

    expect(component.listaEquipos).toEqual(equipos);
  });


  it('should show editar roles', () => {
    const roles = [{ id_rol: 1, name: 'Rol 1' }];
    consultarEquipoServiceSpy.obtenerRoles.and.returnValue(of({ roles }));

    component.showEditarRoles(1);

    expect(component.listaRolesOriginal).toEqual(roles);
    expect(component.listaRolesAlterada).toEqual(roles);
  });

  it('should set rol and update listaRolesAlterada', () => {
    component.listaRolesOriginal = [{ id_rol: 1, is_included: true }];
    component.listaRolesAlterada = [{ id_rol: 1, is_included: true }];

    component.setRol(false, 1);

    expect(component.listaRolesAlterada[0].is_included).toBe(false);
  });


  
    it('should load roles when showEditarRoles is called', () => {
      const roles = [{ id_rol: 1, name: 'Rol 1' }];
      consultarEquipoServiceSpy.obtenerRoles.and.returnValue(of({ roles }));
  
      component.showEditarRoles(1);
  
      expect(component.listaRolesOriginal).toEqual(roles);
      expect(component.listaRolesAlterada).toEqual(roles);
    });

  
    it('should set is_included to true on setRol', () => {
      component.listaRolesOriginal = [{ id_rol: 1, is_included: false }];
      component.listaRolesAlterada = [{ id_rol: 1, is_included: false }];
  
      component.setRol(true, 1);
  
      expect(component.listaRolesAlterada[0].is_included).toBe(true);
    });
  

    // it('should handle errors when loading roles on showEditarRoles', () => {
    //   const errorMessage = 'Error loading roles';
    //   spyOn(consultarEquipoServiceSpy, 'obtenerRoles').and.returnValue(throwError({ message: errorMessage }));
    //   // toastrServiceSpy.error = jasmine.createSpy().and.returnValue(throwError({ message: errorMessage }));
    //   component.showEditarRoles(1);
  
    //   expect(toastrServiceSpy.error).toHaveBeenCalledWith(errorMessage, 'Error');
    // });
  
    // it('should call desAsociarRol when is_included is set to false in guardarCambios', () => {
    //   // const desAsociarSpy = spyOn(consultarEquipoServiceSpy, 'desAsociarRol').and.returnValue(of({}));
  
    //   component.listaRolesOriginal = [{ id_rol: 1, is_included: true }];
    //   component.listaRolesAlterada = [{ id_rol: 1, is_included: false }];
  
    //   component.guardarCambios();
  
    //   expect(consultarEquipoServiceSpy.desAsociarRol).toHaveBeenCalledWith(1, component.id_equipo);
    // });
  
    // it('should call asociarRol when is_included is set to true in guardarCambios', () => {
    //   const asociarSpy = spyOn(consultarEquipoServiceSpy, 'asociarRol').and.returnValue(of({}));
  
    //   component.listaRolesOriginal = [{ id_rol: 1, is_included: false }];
    //   component.listaRolesAlterada = [{ id_rol: 1, is_included: true }];
  
    //   component.guardarCambios();
  
    //   expect(asociarSpy).toHaveBeenCalledWith(1, component.id_equipo);
    // });
  
    // it('should handle errors when calling desAsociarRol in guardarCambios', () => {
    //   component.listaRolesOriginal = [{ id_rol: 1, is_included: true }];
    //   component.listaRolesAlterada = [{ id_rol: 1, is_included: false }];
  
    //   const errorMessage = 'Error desasociating role';
    //   spyOn(consultarEquipoServiceSpy, 'desAsociarRol').and.returnValue(throwError({ message: errorMessage }));
  
    //   component.guardarCambios();
  
    //   expect(toastrServiceSpy.error).toHaveBeenCalledWith(errorMessage, 'Error');
    // });
  
    // it('should handle errors when calling asociarRol in guardarCambios', () => {
    //   component.listaRolesOriginal = [{ id_rol: 1, is_included: false }];
    //   component.listaRolesAlterada = [{ id_rol: 1, is_included: true }];
  
    //   const errorMessage = 'Error associating role';
    //   spyOn(consultarEquipoServiceSpy, 'asociarRol').and.returnValue(throwError({ message: errorMessage }));
  
    //   component.guardarCambios();
  
    //   expect(toastrServiceSpy.error).toHaveBeenCalledWith(errorMessage, 'Error');
    // })
  
    it('should invoke isAllSelected', () => {
      const spyisAllSelected = spyOn(component, 'isAllSelected').and.callThrough();
      component.isAllSelected();
      expect(spyisAllSelected).toHaveBeenCalled();
     });
  
     it('should invoke masterToggle', () => {
      const spymasterToggle = spyOn(component, 'masterToggle').and.callThrough();
      component.masterToggle();
      expect(spymasterToggle).toHaveBeenCalled();
     });
});
