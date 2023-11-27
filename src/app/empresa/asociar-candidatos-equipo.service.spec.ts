/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { AsociarCandidatosEquipoService } from './asociar-candidatos-equipo.service';

describe('Service: AsociarCandidatosEquipo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsociarCandidatosEquipoService]
    });
  });

  it('should ...', inject([AsociarCandidatosEquipoService], (service: AsociarCandidatosEquipoService) => {
    expect(service).toBeTruthy();
  }));
});
