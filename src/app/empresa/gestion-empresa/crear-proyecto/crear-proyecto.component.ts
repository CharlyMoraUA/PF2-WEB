import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultarFichasService } from 'app/empresa/consultar-fichas.service';
import { CrearProyectoService } from 'app/empresa/crear-proyecto.service';
import { Proyecto } from 'app/empresa/representaciones/proyecto';
import { ToastrService } from 'ngx-toastr';
import {SelectionModel} from '@angular/cdk/collections';
import { EquiposDataSource } from 'app/empresa/datasources/EquiposDataSource';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {
  crearProyectoForm!: FormGroup;
  hide : boolean = true;
  error: boolean = false
  displayedColumns: string[] = ['nombre', 'descripcion', 'seleccionar'];
  equiposDataSource = new EquiposDataSource(this.consultarFichasService);
  selection = new SelectionModel<any>(true, []);

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router,
    private crearProyectoService: CrearProyectoService,
    private consultarFichasService: ConsultarFichasService,
    public translate: TranslateService) { 
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
    }

  ngOnInit() {
    this.crearProyectoForm = this.formBuilder.group({
      titulo: ["", [Validators.required, Validators.maxLength(100)]],
      fecha_inicio: ["", [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      fecha_fin: ["", [Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    })
    this.equiposDataSource.cargarEquipos(sessionStorage.getItem("id_empresa"), sessionStorage.getItem("empresa-token"));
    this.error = false
  }

  crearProyecto(proyecto: Proyecto){
    if (proyecto.fecha_fin != null && proyecto.fecha_fin.toString() != "" && proyecto.fecha_inicio > proyecto.fecha_fin){
      this.toastr.error("Error", "Start date must be before end date")
      this.error = true
    }else{
        proyecto.equipos = this.selection.selected
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
      })
    }
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.equiposDataSource.equipos$.value.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.equiposDataSource.equipos$.value.forEach(row => this.selection.select(row));
  }

  goBack(){
    sessionStorage.setItem("pantalla_proyectos", "mis-proyectos")
    sessionStorage.setItem("pantalla_proyectos_index", "0")
    this._router.navigate(["gestion-empresa"])
    this.reloadComponent(true)
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
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
