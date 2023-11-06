import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultarProyectosService } from './consultar-proyectos.service';

describe('Service: ConsultarProyectos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarProyectosService]
    });
  });

  it('should ...', inject([ConsultarProyectosService], (service: ConsultarProyectosService) => {
    expect(service).toBeTruthy();
  }));
});
