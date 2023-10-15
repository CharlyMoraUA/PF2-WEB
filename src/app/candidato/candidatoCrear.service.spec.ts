/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatoCrearService } from './candidatoCrear.service';

describe('Service: CandidatoCrear', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatoCrearService]
    });
  });

  it('should ...', inject([CandidatoCrearService], (service: CandidatoCrearService) => {
    expect(service).toBeTruthy();
  }));
});
