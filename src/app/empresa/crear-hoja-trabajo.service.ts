import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearHojaTrabajoService {
  private apiUrl = environment.urlBaseEquipos
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  constructor(private http: HttpClient) { }

  crearHojaTrabajo(hojaTrabajo: any, token: string, id_poyecto: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<any>(`${this.apiUrl}proyectos/${id_poyecto}/hojas-trabajo`, hojaTrabajo, { headers: headers });
  }

}
