import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConsultarResultadosPruebasService } from './consultar-resultados-pruebas.service';
import { environment } from 'environments/environment';

describe('ConsultarResultadosPruebasService', () => {
  let service: ConsultarResultadosPruebasService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarResultadosPruebasService],
    });

    service = TestBed.inject(ConsultarResultadosPruebasService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP GET request to obtain pruebas', () => {
    const documento = 'testDocument';
    const mockResponse = { /* your mock response here */ };

    // Make the HTTP request
    service.obtenerPruebas(documento).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    // Expect a request to this URL
const expectedUrl = `${environment.baseUrl}candidato/pruebas/${documento}`;
const expectedHeaders = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + sessionStorage.getItem('empresa-token'),
};

const req = httpTestingController.expectOne((request) => {
  return request.method === 'GET' && request.url === expectedUrl && request.headers.get('Content-Type') === expectedHeaders['Content-Type'] && request.headers.get('Authorization') === expectedHeaders['Authorization'];
});

// Respond with the mock data
req.flush(mockResponse);


    // Ensure that there are no outstanding requests
    httpTestingController.verify();
  });
});
