import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoInfoService } from '../candidatoInfo.service';

@Component({
  selector: 'app-candidatoEditar',
  templateUrl: './candidatoEditar.component.html',
  styleUrls: ['./candidatoEditar.component.scss']
})
export class CandidatoEditarComponent implements OnInit {

  constructor(
    private candidatoInfoService: CandidatoInfoService,
    private _router: Router
  ) { }

  lista:any = {};

  ngOnInit(): void {
    this.consultarInfo(sessionStorage.getItem("id_candidato"))
  }

  consultarInfo(id_candidato){
    this.candidatoInfoService.obtenerInfoCandidato(id_candidato, sessionStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

  goToInfoTecnica(){
    this._router.navigate(["infoTecnica"])
  }

}
