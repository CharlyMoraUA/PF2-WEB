import { Component, OnInit } from '@angular/core';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatoEditar',
  templateUrl: './candidatoEditar.component.html',
  styleUrls: ['./candidatoEditar.component.scss']
})
export class CandidatoEditarComponent implements OnInit {

  constructor(
    private candidatoService: CandidatoCrearService,
    private _router: Router
  ) { }

  lista:any = {};

  ngOnInit(): void {
    this.consultarInfo(localStorage.getItem("id_candidato"))
  }

  consultarInfo(id_candidato){
    this.candidatoService.obtenerInfoCandidato(id_candidato, localStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

  goToInfoTecnica(){
    this._router.navigate(["infoTecnica"])
  }

}
