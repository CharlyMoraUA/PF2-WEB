import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CrearProyectoService } from './crear-proyecto.service';

describe('Service: CrearProyecto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrearProyectoService]
    });
  });

  it('should ...', inject([CrearProyectoService], (service: CrearProyectoService) => {
    expect(service).toBeTruthy();
  }));
});
