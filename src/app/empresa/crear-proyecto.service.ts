import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Proyecto } from './representaciones/proyecto';

@Injectable({
  providedIn: 'root'
})
export class CrearProyectoService {
  private apiUrl = environment.urlBaseEquipos

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  crearProyecto(proyecto: Proyecto, token: string): Observable<any> {
    console.log(proyecto)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<any>(`${this.apiUrl}proyecto/crear`, proyecto, { headers: headers });
  }

}
