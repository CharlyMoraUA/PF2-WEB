import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsociarCandidatosEquipoService {
  private apiUrl = environment.urlBaseEquipos

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ sessionStorage.getItem("empresa-token")
    })
  }; 

  asociarCandidatosAEquipo(id_equipo: number, candidatos: any): Observable<any> {
    console.log(candidatos)
    return this.http.post<any>(`${this.apiUrl}equipos/${id_equipo}/candidatos`, candidatos , this.httpOptions);
  }

}
