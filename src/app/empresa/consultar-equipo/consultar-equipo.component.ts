import { Component, OnInit } from '@angular/core';
import { ConsultarEquipoService } from '../consultar-equipo.service';

@Component({
  selector: 'app-consultar-equipo',
  templateUrl: './consultar-equipo.component.html',
  styleUrls: ['./consultar-equipo.component.scss']
})
export class ConsultarEquipoComponent implements OnInit {
  verEquipos=true;

  constructor(private consultarEquipoService: ConsultarEquipoService,) { }
  listaEquipos:any;
  listaRoles:any;

  ngOnInit(): void {
    console.log("CONSULTA EQUIPO")
    this.cargarEntrevistas(sessionStorage.getItem("id_empresa"))
  }

  cargarEntrevistas(id_empresa){
    this.consultarEquipoService.obtenerEquipos(id_empresa).subscribe(resp=>{
      console.log("entrevistas.fichas")
      console.log(resp.fichas)
      this.listaEquipos = resp.fichas
    })
  }

  showEditarRoles(id_equipo){
    console.log("equipo id")
    console.log(id_equipo)
    this.listaRoles=[]
    this.verEquipos=false
    this.consultarEquipoService.obtenerRoles(id_equipo).subscribe(resp=>{
      console.log("roles")
      console.log(resp)
      this.listaRoles = resp.roles
    })
  }

  backToEquipos(){
    this.verEquipos=true
  }
}
