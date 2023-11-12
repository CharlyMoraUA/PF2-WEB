import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosEntrevistasService {

  private apiUrl = environment.baseUrl + 'candidato/';

constructor(private http: HttpClient) { }

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

obtenerResulEntrevistas(tipo_doc, num_doc, id_empresa, token: string): Observable<any> {
  let queryParams = new HttpParams().append("tipo_doc",tipo_doc).append( "num_doc",num_doc).append( "id_empresa", id_empresa);
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.get<any>(this.apiUrl+"resultadosEntrevistas", {params:queryParams, headers: headers});
}



}
