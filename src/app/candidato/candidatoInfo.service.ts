import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoInfoService {

  private apiUrl = environment.baseUrl + 'candidato/';

constructor(private http: HttpClient) { }

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; 

obtenerInfoCandidato(id_candidato): Observable<any> {
  return this.http.get<any>(this.apiUrl+"detalle?id_candidato="+id_candidato);
}

}
