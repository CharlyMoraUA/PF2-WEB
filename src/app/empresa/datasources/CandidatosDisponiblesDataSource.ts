import { DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Candidato } from "app/candidato/representaciones/candidato";
import { ConsultarCandidatosDisponiblesService } from "app/candidato/consultar-candidatos-disponibles.service";
import { DialogData } from "../gestion-empresa/crear-hoja-trabajo/crear-hoja-trabajo.component";

@Injectable()
export class CandidatosDisponiblesDataSource extends DataSource<Candidato> {
  candidatos$ = new BehaviorSubject<Candidato[]>([]);
  candidatosBase$ = new BehaviorSubject<Candidato[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private consultarCandidatosDisponiblesService: ConsultarCandidatosDisponiblesService) {
    super();
  }

  connect(): Observable<Candidato[]> {
    return this.candidatos$.asObservable();
  }

  disconnect(): void {
    this.candidatos$.complete();
  }

  cargarCandidatos(token:string): void {
    this.isLoading$.next(true);
    this.consultarCandidatosDisponiblesService.consultarCandidatos(token).subscribe((candidatos) => {
        let candidatosArray = candidatos["candidatos"];
        let candidatosDisponibles = [];
        candidatosArray.forEach((candidato: any) => {
            candidatosDisponibles.push(candidato)
        });
        this.candidatos$.next(candidatosDisponibles);
        this.candidatosBase$.next(candidatosDisponibles);
        this.isLoading$.next(false);
    });
  }

  filtrarCandidatos(filtros: DialogData): void {
    this.isLoading$.next(true);
    let candidatosDisponiblesActuales = this.candidatosBase$.value;
    let nuevosCandidatosDisponibles = [];
    candidatosDisponiblesActuales.forEach((candidato: any) => {
        if(filtros.java){
          let habilidades_tecnicas = candidato.habilidades_tecnicas;
          if(JSON.stringify(habilidades_tecnicas).includes("Java")){
            if(!nuevosCandidatosDisponibles.includes(candidato)){
              nuevosCandidatosDisponibles.push(candidato); 
            }
          }
        }
        if(filtros.python){
          let habilidades_tecnicas = candidato.habilidades_tecnicas;
          if(JSON.stringify(habilidades_tecnicas).includes("Python")){
            if(!nuevosCandidatosDisponibles.includes(candidato)){
              nuevosCandidatosDisponibles.push(candidato); 
            }
          }
        }
        if(filtros.scrum){
          let habilidades_tecnicas = candidato.habilidades_tecnicas;
          if(JSON.stringify(habilidades_tecnicas).includes("Scrum")){
            if(!nuevosCandidatosDisponibles.includes(candidato)){
              nuevosCandidatosDisponibles.push(candidato); 
            }
          } 
        }
        if(filtros.universitaria){
          let info_academica = candidato.info_academica;
          if(JSON.stringify(info_academica).includes("UNIVERSITARIA")){
            if(!nuevosCandidatosDisponibles.includes(candidato)){
              nuevosCandidatosDisponibles.push(candidato); 
            }
          }
        }
        if(filtros.tecnologica){
          let info_academica = candidato.info_academica;
          if(JSON.stringify(info_academica).includes("TECNOLOGICA")){
            if(!nuevosCandidatosDisponibles.includes(candidato)){
              nuevosCandidatosDisponibles.push(candidato); 
            }
          }
        }
        if(filtros.tecnica){
          let info_academica = candidato.info_academica;
          if(JSON.stringify(info_academica).includes("TECNICA")){
            if(!nuevosCandidatosDisponibles.includes(candidato)){
              nuevosCandidatosDisponibles.push(candidato); 
            }
          }
        }
    });
    this.candidatos$.next(nuevosCandidatosDisponibles);
  }
}