import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultarEquipoService } from './consultar-equipo.service';

describe('Service: ConsultarEquipo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarEquipoService]
    });
  });

  it('should ...', inject([ConsultarEquipoService], (service: ConsultarEquipoService) => {
    expect(service).toBeTruthy();
  }));
});
