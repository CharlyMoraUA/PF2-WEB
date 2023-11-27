import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Proyecto } from './representaciones/proyecto';
import { Evaluacion } from 'app/candidato/representaciones/evaluacion';
import { HojaResp } from './representaciones/hoja_resp';

@Injectable({
  providedIn: 'root'
})
export class ConsultarProyectosService {
  private apiUrl = environment.urlBaseEquipos
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  consultarProyectos(idEmpresa: string, token: string): Observable<Proyecto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Proyecto[]>(`${this.apiUrl}proyectos/consultar?id_empresa=${idEmpresa}`, { headers: headers });
  }

  consultarHojasTrabajoProyectos(idEmpresa: string, idProyecto: string, token: string): Observable<HojaResp> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<HojaResp>(`${this.apiUrl}proyectos/${idProyecto}/hojas-trabajo`, { headers: headers });
  }

  consultarCandidatosHojasTrabajo(idEmpresa: string, idProyecto: string,id_hoja:number, token: string): Observable<Proyecto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Proyecto[]>(`${this.apiUrl}proyectos/${idProyecto}/hojas-trabajo/${id_hoja}`, { headers: headers });
  }

  crearEvaluacionCandidato(idCandidato: string, evaluacion: Evaluacion, token: string): Observable<Evaluacion> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<Evaluacion>(`${this.apiUrl}proyectos/evaluacion/${idCandidato}`,evaluacion, { headers: headers });
  }

}
