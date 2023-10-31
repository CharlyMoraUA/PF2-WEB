import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { EquipoElement } from './representaciones/equipo';

@Injectable({
  providedIn: 'root'
})
export class ConsultarFichasService {
  //private apiUrl = environment.urlBaseEmpresa
  private apiUrl = environment.urlBaseEquipos

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  consultarEquipos(idEmpresa: string, token: string): Observable<EquipoElement[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<EquipoElement[]>(`${this.apiUrl}/equipos/consultar?id_empresa=${idEmpresa}`, { headers: headers });
  }

}
