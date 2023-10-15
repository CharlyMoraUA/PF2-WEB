import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'
import { Observable } from 'rxjs';
import { Candidato } from './candidato';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoCrearService {

  private apiUrl = environment.baseUrl + 'candidato/create';
  //private apiUrl = '/api/candidato/create';

constructor(private http: HttpClient) { }

crearCandidato(candidato: Candidato): Observable<Candidato> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 


  return this.http.post<Candidato>(this.apiUrl, candidato);
}

}
