import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultarFichasService } from './consultar-fichas.service';

describe('Service: ConsultarFichas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarFichasService]
    });
  });

  it('should ...', inject([ConsultarFichasService], (service: ConsultarFichasService) => {
    expect(service).toBeTruthy();
  }));
});
