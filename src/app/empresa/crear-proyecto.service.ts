import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Proyecto } from './representaciones/proyecto';

@Injectable({
  providedIn: 'root'
})
export class CrearProyectoService {
  private apiUrl = environment.urlBaseEmpresa
  //private apiUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  crearProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/proyeto/crear`, proyecto);
  }

}
