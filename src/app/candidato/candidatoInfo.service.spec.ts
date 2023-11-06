/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatoInfoService } from './candidatoInfo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: CandidatoInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CandidatoInfoService]
    });
  });

  it('should ...', inject([CandidatoInfoService], (service: CandidatoInfoService) => {
    expect(service).toBeTruthy();
  }));
});
