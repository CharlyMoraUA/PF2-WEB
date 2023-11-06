/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatoCrearService } from './candidatoCrear.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: CandidatoCrear', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CandidatoCrearService]
    });
  });

  it('should ...', inject([CandidatoCrearService], (service: CandidatoCrearService) => {
    expect(service).toBeTruthy();
  }));
});
