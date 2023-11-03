/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultarProyectosService } from './consultar-proyectos.service';

describe('Service: ConsultarProyectos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarProyectosService]
    });
  });

  it('should ...', inject([ConsultarProyectosService], (service: ConsultarProyectosService) => {
    expect(service).toBeTruthy();
  }));
});
