import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Proyecto } from './representaciones/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ConsultarResultadosPruebasService {

  private apiUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ sessionStorage.getItem("empresa-token")
    })
  }; 

  obtenerPruebas(documento: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}candidato/pruebas/${documento}`, this.httpOptions);
  }
}
