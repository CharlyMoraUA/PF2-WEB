/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CrearHojaTrabajoService } from './crear-hoja-trabajo.service';

describe('Service: CrearHojaTrabajo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrearHojaTrabajoService]
    });
  });

  it('should ...', inject([CrearHojaTrabajoService], (service: CrearHojaTrabajoService) => {
    expect(service).toBeTruthy();
  }));
});
