import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-entrevistas',
  templateUrl: './historial-entrevistas.component.html',
  styleUrls: ['./historial-entrevistas.component.scss']
})
export class HistorialEntrevistasComponent implements OnInit {

  constructor() { }

  listaPrueba = 
  [
    {"fecha_entrevista" : "2023-01-05", "estado" : "Finalizada", "empresa" : "Empresa de Prueba TS"},
    {"fecha_entrevista" : "2023-01-07", "estado" : "Programada", "empresa" : "Empresa de Prueba 2S"},
    {"fecha_entrevista" : "2023-02-05", "estado" : "Finalizada", "empresa" : "Empresa de Prueba 3Z"},
  ]

  ngOnInit(): void {
  }

}
