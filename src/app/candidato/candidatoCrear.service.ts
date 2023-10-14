import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'
import { Observable } from 'rxjs';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoCrearService {

  private apiUrl = environment.baseUrl + 'candidato/create';

constructor(private http: HttpClient) { }

crearCandidato(candidato: Candidato): Observable<Candidato> {
  return this.http.post<Candidato>(this.apiUrl, candidato);
}

}
