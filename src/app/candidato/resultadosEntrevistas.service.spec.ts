/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResultadosEntrevistasService } from './resultadosEntrevistas.service';

describe('Service: ResultadosEntrevistas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadosEntrevistasService]
    });
  });

  it('should ...', inject([ResultadosEntrevistasService], (service: ResultadosEntrevistasService) => {
    expect(service).toBeTruthy();
  }));
});
