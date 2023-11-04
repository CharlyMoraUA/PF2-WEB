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
    return this.http.get<EquipoElement[]>(`${this.apiUrl}equipos/consultar?id_empresa=${idEmpresa}`, { headers: headers });
  }

  actualizarRol(id_rol:number, titulo: string, descripcion: string, blandas:any[], tecnicas:any[], token: string): Observable<EquipoElement[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.put<any>(`${this.apiUrl}equipos/rol`,{
      "id_rol":id_rol,
      "titulo_rol":titulo,
      "descripcion_rol":descripcion,
      "lista_habilidades_blandas":blandas,
      "lista_habilidades_tecnicas":tecnicas
    },{ headers: headers });
  }

  consultarHabilidades(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any>(`${this.apiUrl}equipos/habilidad`, { headers: headers });
  }

  
}
