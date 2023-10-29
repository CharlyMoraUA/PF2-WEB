/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrearProyectoService } from './crear-proyecto.service';

describe('Service: CrearProyecto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearProyectoService]
    });
  });

  it('should ...', inject([CrearProyectoService], (service: CrearProyectoService) => {
    expect(service).toBeTruthy();
  }));
});
