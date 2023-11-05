import { Component, OnInit } from '@angular/core';
import { ConsultarEquipoService } from '../consultar-equipo.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallarRolComponent } from '../gestion-empresa/detallar-rol/detallar-rol.component';
import { forkJoin, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-consultar-equipo',
  templateUrl: './consultar-equipo.component.html',
  styleUrls: ['./consultar-equipo.component.scss']
})
export class ConsultarEquipoComponent implements OnInit {
  verEquipos = true;
  allComplete = true;
  guardando = false;

  constructor(private consultarEquipoService: ConsultarEquipoService,
              public dialog: MatDialog,
              private toastr: ToastrService,) { }
  listaEquipos:any;
  listaRoles:any;
  id_selected_equipo = 0;
  listaRolesOriginal: any[];
  listaRolesAlterada: any[];
  id_equipo: number

  ngOnInit(): void {
    this.cargarEntrevistas(sessionStorage.getItem("id_empresa"))
  }

  cargarEntrevistas(id_empresa) {
    this.consultarEquipoService.obtenerEquipos(id_empresa).subscribe(resp => {
      console.log("entrevistas.fichas")
      console.log(resp.fichas)
      this.listaEquipos = resp.fichas
    })
  }

  openDialog(id_rol) {
    const dialogRef = this.dialog.open(DetallarRolComponent, {
      data: {
        id_rol: id_rol
      },
      height: '490px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.consultarEquipoService.obtenerRoles(this.id_selected_equipo).subscribe(resp=>{
        this.listaRoles = resp.roles
        this.id_selected_equipo=0;
      })
    });

    return true;
  }
  
  showEditarRoles(id_equipo) {
    console.log("equipo id")
    console.log(id_equipo)
    this.id_equipo = id_equipo
    this.listaRolesOriginal = []
    this.listaRolesAlterada = []
    this.verEquipos = false
    this.consultarEquipoService.obtenerRoles(id_equipo).subscribe(resp => {
      console.log("roles")
      console.log(resp)
      this.listaRolesOriginal = JSON.parse(JSON.stringify(resp.roles));
      this.listaRolesAlterada = JSON.parse(JSON.stringify(resp.roles));
      

    })
  }

  backToEquipos() {
    this.verEquipos = true
    this.id_equipo = 0;
  }

  setRol(isSelected: boolean, id_rol: number) {
    console.log("completed")
    console.log(isSelected)
    console.log(id_rol)
    let tempListaRoles = [];
    this.listaRolesAlterada.forEach(element => {
      if (element.id_rol == id_rol) {
        element.is_included = isSelected
      }
      tempListaRoles.push(element)
    });
    this.listaRolesAlterada = tempListaRoles;
    console.log(this.listaRolesAlterada)
    console.log(this.listaRolesOriginal)
  }

  guardarCambios() {
    this.guardando = true
    console.log('cambios guardados')

    // Create an array to store the Observables returned by the service calls
    const observables: Observable<any>[] = [];

    for (let index = 0; index < this.listaRolesOriginal.length; index++) {
      const element = this.listaRolesOriginal[index];
      const elementMod = this.listaRolesAlterada[index];

      if (!(element.is_included == elementMod.is_included)) {
        if (elementMod.is_included === false) {
          // Remover rol que estaba activo
          console.log("")
          observables.push(this.consultarEquipoService.desAsociarRol(elementMod.id_rol, this.id_equipo));
        } else {
          console.log("")
          // Asociar rol
          observables.push(this.consultarEquipoService.asociarRol(elementMod.id_rol, this.id_equipo));
        }
      }
    }

    // Use forkJoin with an array of Observables
    forkJoin(observables).subscribe({
      next: (results) => {
        console.log('All subscriptions completed.');
        this.guardando = false
        this.toastr.success("Cambios realizados!", "Exito")
        // Handle the results here if needed
      },
      error: (error) => {
        console.error('An error occurred:', error);
        this.guardando = false
      },
      complete: () => {
        // Handle completion if needed
        console.log("completed")
        this.guardando = false
      },
    });



  }
}
