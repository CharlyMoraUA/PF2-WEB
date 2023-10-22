import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionCandidatoService {

  private backUrl: string = environment.urlBaseAutenticacion 

  constructor(private http: HttpClient) { }

  candidatoLogIn(usuario: string, clave: string): Observable<any> {
      return this.http.post<any>(`${this.backUrl}/autenticacion/candidatos/login`, { "usuario": usuario, "clave": clave });
  }

  empresaLogIn(usuario: string, clave: string): Observable<any> {
    return this.http.post<any>(`${this.backUrl}/autenticacion/empresas/login`, { "usuario": usuario, "clave": clave });
  }

}
