/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrearEmpresaService } from './crear-empresa.service';

describe('Service: CrearEmpresa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearEmpresaService]
    });
  });

  it('should ...', inject([CrearEmpresaService], (service: CrearEmpresaService) => {
    expect(service).toBeTruthy();
  }));
});
