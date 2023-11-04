import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Candidato } from './representaciones/candidato';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCandidatosDisponiblesService {
  private apiUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  consultarCandidatos(token: string): Observable<Candidato[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Candidato[]>(`${this.apiUrl}candidatos/disponibles`, { headers: headers });
  }

}
