import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultarCandidatosDisponiblesService } from './consultar-candidatos-disponibles.service';

describe('Service: ConsultarCandidatosDisponibles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarCandidatosDisponiblesService]
    });
  });

  it('should ...', inject([ConsultarCandidatosDisponiblesService], (service: ConsultarCandidatosDisponiblesService) => {
    expect(service).toBeTruthy();
  }));
});
