import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, of, throwError } from 'rxjs';
import { ConsultarResultadosPruebasService } from '../consultar-resultados-pruebas.service';
import { ConsultarResultadosPruebasTecnicasComponent } from './consultar-resultados-pruebas-tecnicas.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


class TranslateLoaderMock implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({});
  }
}

describe('ConsultarResultadosPruebasTecnicasComponent', () => {
  let component: ConsultarResultadosPruebasTecnicasComponent;
  let fixture: ComponentFixture<ConsultarResultadosPruebasTecnicasComponent>;
  let formBuilder: FormBuilder;
  let consultarResultadosPruebasService: jasmine.SpyObj<ConsultarResultadosPruebasService>;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const consultarResultadosPruebasServiceSpy = jasmine.createSpyObj('ConsultarResultadosPruebasService', ['obtenerPruebas']);
    const translateServiceSpy = jasmine.createSpyObj('TranslateService', ['addLangs', 'setDefaultLang', 'use']);
  
    TestBed.configureTestingModule({
      declarations: [ConsultarResultadosPruebasTecnicasComponent],
      providers: [
        FormBuilder,
        { provide: ConsultarResultadosPruebasService, useValue: consultarResultadosPruebasServiceSpy },
        { provide: TranslateService, useValue: translateServiceSpy },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateLoaderMock },
        }),
        MatIconModule, // <-- Add MatIconModule
        BrowserAnimationsModule, // <-- Add BrowserAnimationsModule if not already added
      ],
    }).compileComponents();
    
  
    fixture = TestBed.createComponent(ConsultarResultadosPruebasTecnicasComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder); // <-- inject the FormBuilder instance
    consultarResultadosPruebasService = TestBed.inject(ConsultarResultadosPruebasService) as jasmine.SpyObj<ConsultarResultadosPruebasService>;
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });
  

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize the form', () => {
      spyOn(formBuilder, 'group').and.callThrough();

      component.ngOnInit();

      // expect(formBuilder.group).toHaveBeenCalledWith(
      //   {
      //     documento: ["", [Validators.required, Validators.maxLength(100)]],
      //   },
      //   undefined // Adding the second argument for form builder options
      // );
      expect(component.consultarPruebasForm).toBeDefined();
    });
  });

  describe('consultarDocumento', () => {
    it('should call obtenerPruebas and update properties on success', () => {
      const mockResponse = {
        pruebas: ['test'],
        nombre: 'John Doe',
      };
      consultarResultadosPruebasService.obtenerPruebas.and.returnValue(of(mockResponse));

      component.consultarDocumento('123');

      expect(component.noResults).toBe(false);
      expect(component.listaPruebas).toEqual(mockResponse.pruebas);
      expect(component.username).toEqual(mockResponse.nombre);
    });

    it('should handle no results', () => {
      const mockResponse = {
        pruebas: [],
        nombre: 'John Doe',
      };
      consultarResultadosPruebasService.obtenerPruebas.and.returnValue(of(mockResponse));

      component.consultarDocumento('123');

      expect(component.noResults).toBe(true);
    });

    it('should handle error', () => {
      const errorMessage = 'Error fetching data';
      consultarResultadosPruebasService.obtenerPruebas.and.returnValue(throwError({ message: errorMessage }));

      component.consultarDocumento('123');

      expect(component.noResults).toBe(true);
    });
  });

  describe('translateLanguageTo', () => {
    it('should switch language using translate service', () => {
      const lang = 'en';

      component.translateLanguageTo(lang);

      expect(translateService.use).toHaveBeenCalledWith(lang);
    });
  });
});
