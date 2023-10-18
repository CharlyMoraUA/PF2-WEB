import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { AutenticacionCandidatoService } from './autenticacion-candidato.service';

describe('Service: AutenticacionCandidato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutenticacionCandidatoService]
    });
  });

  it('should ...', inject([AutenticacionCandidatoService], (service: AutenticacionCandidatoService) => {
    expect(service).toBeTruthy();
  }));
});
