/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResultadosEntrevistasService } from './resultadosEntrevistas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ResultadosEntrevistas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResultadosEntrevistasService]
    });
  });

  it('should ...', inject([ResultadosEntrevistasService], (service: ResultadosEntrevistasService) => {
    expect(service).toBeTruthy();
  }));
});
