import { DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { EquipoElement } from "../representaciones/equipo";
import { BehaviorSubject, Observable } from "rxjs";
import { ConsultarFichasService } from "../consultar-fichas.service";

@Injectable()
export class EquiposDataSource extends DataSource<EquipoElement> {
  equipos$ = new BehaviorSubject<EquipoElement[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private fichasService: ConsultarFichasService) {
    super();
  }

  connect(): Observable<EquipoElement[]> {
    return this.equipos$.asObservable();
  }

  disconnect(): void {
    this.equipos$.complete();
  }

  cargarEquipos(id_empresa: string, token:string): void {
    this.isLoading$.next(true);
    this.fichasService.consultarEquipos(id_empresa, token).subscribe((equipos) => {
        console.log("equipos", equipos["fichas"])
        this.equipos$.next(equipos["fichas"]);
        this.isLoading$.next(false);
    });
  }
}