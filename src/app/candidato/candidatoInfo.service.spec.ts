/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatoInfoService } from './candidatoInfo.service';

describe('Service: CandidatoInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatoInfoService]
    });
  });

  it('should ...', inject([CandidatoInfoService], (service: CandidatoInfoService) => {
    expect(service).toBeTruthy();
  }));
});
