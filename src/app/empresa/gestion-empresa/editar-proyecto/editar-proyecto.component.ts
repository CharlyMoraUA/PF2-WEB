import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultarFichasService } from 'app/empresa/consultar-fichas.service';
import { Proyecto } from 'app/empresa/representaciones/proyecto';
import { ToastrService } from 'ngx-toastr';
import {SelectionModel} from '@angular/cdk/collections';
import { EquiposDataSource } from 'app/empresa/datasources/EquiposDataSource';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.scss']
})
export class EditarProyectoComponent implements OnInit {
  editarProyectoForm!: FormGroup;
  hide : boolean = true;
  error: boolean = false
  displayedColumns: string[] = ['nombre', 'descripcion', 'seleccionar'];
  equiposDataSource = new EquiposDataSource(this.consultarFichasService);
  selection = new SelectionModel<any>(true, []);


  constructor( 
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router,
    private consultarFichasService: ConsultarFichasService,
    public translate: TranslateService) { 
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
    }

  ngOnInit() {
    this.editarProyectoForm = this.formBuilder.group({
      titulo: ["", [Validators.required, Validators.maxLength(100)]],
      fecha_inicio: ["", [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      fecha_fin: ["", [Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    })
    this.equiposDataSource.cargarEquipos(sessionStorage.getItem("id_empresa"), sessionStorage.getItem("empresa-token"));
    this.error = false
    let proyecto_editar = JSON.parse(sessionStorage.getItem("proyecto_editar"))
    this.editarProyectoForm.controls['titulo'].setValue(proyecto_editar["titulo"])
    let fecha_inicio = proyecto_editar["fecha_inicio"].split("T")[0]
    let fecha_fin = proyecto_editar["fecha_fin"].split("T")[0]
    this.editarProyectoForm.controls['fecha_inicio'].setValue(fecha_inicio)
    this.editarProyectoForm.controls['fecha_fin'].setValue(fecha_fin)
  }

  actualizarProyecto(proyecto: Proyecto){
    if (proyecto.fecha_fin != null && proyecto.fecha_fin.toString() != "" && proyecto.fecha_inicio > proyecto.fecha_fin){
      this.toastr.error("Error", "Start date must be before end date")
      this.error = true
    }else{
      /*proyecto.equipos = this.selection.selected
      proyecto.id_empresa = Number(sessionStorage.getItem("id_empresa"));
      this.crearProyectoService.crearProyecto(proyecto, sessionStorage.getItem("empresa-token")).subscribe(res => {
        if (res.status_code == "200"){
          this.toastr.success("Success", "Project succesfully created")
          this.goBack()
        }else{
          this.error = true
          this.toastr.error("Error", res.message)  
        }
      },
      error => {
        this.error = true
        this.toastr.error("Error", "Project creation error: "+error.error.message)
      })*/
      this.toastr.success("Success", "Project succesfully created")
      this.goBack()
    }
  }

  goBack(){
    sessionStorage.setItem("pantalla_proyectos", "mis-proyectos")
    this._router.navigate(["gestion-empresa"])
    this.reloadComponent(true)
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   console.log("Current route I am on:",this._router.url);
   const url=self ? this._router.url :urlToNavigateTo;
   this._router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this._router.navigate([`/${url}`]).then(()=>{
       console.log(`After navigation I am on:${this._router.url}`)
     })
   })
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
