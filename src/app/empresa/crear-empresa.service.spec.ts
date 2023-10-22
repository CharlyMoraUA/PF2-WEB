import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CrearEmpresaService } from './crear-empresa.service';

describe('Service: CrearEmpresa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrearEmpresaService]
    });
  });

  it('should ...', inject([CrearEmpresaService], (service: CrearEmpresaService) => {
    expect(service).toBeTruthy();
  }));
});
