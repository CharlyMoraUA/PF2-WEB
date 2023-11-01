import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'
import { Observable } from 'rxjs';
import { Candidato } from './representaciones/candidato';
import { HttpHeaders } from '@angular/common/http';
import { infoTecnica } from './representaciones/infoTecnica';

@Injectable({
  providedIn: 'root'
})
export class CandidatoCrearService {

  private apiUrl = environment.baseUrl + 'candidato/';

constructor(private http: HttpClient) { }


httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; 


crearCandidato(candidato: Candidato): Observable<Candidato> {
  candidato.idiomas = candidato.idiomas.toString()
  return this.http.post<Candidato>(this.apiUrl+"create", candidato);
}


obtenerHistorialEntrevista(id_candidato): Observable<any> {
  return this.http.get<any>(this.apiUrl+"historialEntrevistas?id_candidato="+id_candidato);
}

obtenerInfoCandidato(id_candidato): Observable<any> {
  return this.http.get<any>(this.apiUrl+"detalle?id_candidato="+id_candidato);
}

obtenerInfoTecnica(id_candidato): Observable<any> {
  return this.http.get<any>(this.apiUrl+"infoTecnica?id_candidato="+id_candidato)
}

agregarInfoTecnica(infotecnica: infoTecnica, token: string): Observable<infoTecnica> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.post<infoTecnica>(this.apiUrl+"infoTecnica", infotecnica, { headers: headers });
}

}
