import { Component, OnInit } from '@angular/core';
import { ConsultarEquipoService } from '../consultar-equipo.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallarRolComponent } from '../gestion-empresa/detallar-rol/detallar-rol.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-consultar-equipo',
  templateUrl: './consultar-equipo.component.html',
  styleUrls: ['./consultar-equipo.component.scss']
})
export class ConsultarEquipoComponent implements OnInit {
  verEquipos=true;

  constructor(private consultarEquipoService: ConsultarEquipoService,
              public dialog: MatDialog,
              public translate: TranslateService) { 

                      // Register translation languages
                      translate.addLangs(['en', 'es']);
                      // Set default language
                      translate.setDefaultLang('es');
              }
  listaEquipos:any;
  listaRoles:any;
  id_selected_equipo = 0;

  ngOnInit(): void {
    this.cargarEntrevistas(sessionStorage.getItem("id_empresa"))
  }

  cargarEntrevistas(id_empresa){
    this.consultarEquipoService.obtenerEquipos(id_empresa).subscribe(resp=>{
      this.listaEquipos = resp.fichas
    })
  }

  showEditarRoles(id_equipo){
    this.listaRoles=[]
    this.verEquipos=false
    this.id_selected_equipo = id_equipo
    this.consultarEquipoService.obtenerRoles(id_equipo).subscribe(resp=>{
      this.listaRoles = resp.roles
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

  backToEquipos(){
    this.verEquipos=true
  }

     //Switch language
     translateLanguageTo(lang: string) {
      this.translate.use(lang);
    }
  
}
