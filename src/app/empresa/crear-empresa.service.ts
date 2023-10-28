import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Empresa } from './representaciones/empresa';

@Injectable({
  providedIn: 'root'
})
export class CrearEmpresaService {
  private apiUrl = environment.urlBaseEmpresa

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  crearEmpresa(empresa: Empresa): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/empresa/registro`, empresa);
  }

}
