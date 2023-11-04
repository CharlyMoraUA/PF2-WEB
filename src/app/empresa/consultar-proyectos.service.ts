import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Proyecto } from './representaciones/proyecto';

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

}
