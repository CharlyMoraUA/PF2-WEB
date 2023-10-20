import { Component, OnInit } from '@angular/core';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';

@Component({
  selector: 'app-historial-entrevistas',
  templateUrl: './historial-entrevistas.component.html',
  styleUrls: ['./historial-entrevistas.component.scss']
})
export class HistorialEntrevistasComponent implements OnInit {

  constructor(private candidatoService: CandidatoCrearService,) { }

  listaPrueba:any;

  ngOnInit(): void {
    this.cargarEntrevistas(localStorage.getItem("id_candidato"))
  }

  cargarEntrevistas(id_candidato){
    this.candidatoService.obtenerHistorialEntrevista(id_candidato).subscribe(entrevistas=>{
      this.listaPrueba = entrevistas.response
    })
  }

}
