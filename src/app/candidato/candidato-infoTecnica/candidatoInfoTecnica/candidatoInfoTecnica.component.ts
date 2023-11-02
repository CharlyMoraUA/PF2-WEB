import { Component, OnInit } from '@angular/core';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatoInfoTecnica',
  templateUrl: './candidatoInfoTecnica.component.html',
  styleUrls: ['./candidatoInfoTecnica.component.scss']
})
export class CandidatoInfoTecnicaComponent implements OnInit {

  constructor(
    private candidatoService: CandidatoCrearService,
    private _router: Router
  ) { }

  lista:any = {};

  ngOnInit(): void {
    this.consultarInfoTecnica(localStorage.getItem("id_candidato"))
  }

  consultarInfoTecnica(id_candidato){
    this.candidatoService.obtenerInfoTecnica(id_candidato, localStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }


  backToInfo(){
    this._router.navigate(["editarCandidatos"])
  }

}
