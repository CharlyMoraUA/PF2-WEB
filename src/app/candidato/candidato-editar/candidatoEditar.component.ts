import { Component, OnInit } from '@angular/core';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';

@Component({
  selector: 'app-candidatoEditar',
  templateUrl: './candidatoEditar.component.html',
  styleUrls: ['./candidatoEditar.component.scss']
})
export class CandidatoEditarComponent implements OnInit {

  constructor(
    private candidatoService: CandidatoCrearService,
  ) { }

  lista:any;

  ngOnInit(): void {
    this.consultarInfo(localStorage.getItem("id_candidato"))
  }

  consultarInfo(id_candidato){
    this.candidatoService.obtenerInfoCandidato(id_candidato).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

}
