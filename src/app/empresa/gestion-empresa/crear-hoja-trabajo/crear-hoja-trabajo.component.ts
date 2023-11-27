import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import {SelectionModel} from '@angular/cdk/collections';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultarCandidatosDisponiblesService } from 'app/candidato/consultar-candidatos-disponibles.service';
import { CandidatosDisponiblesDataSource } from 'app/empresa/datasources/CandidatosDisponiblesDataSource';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Candidato } from 'app/candidato/representaciones/candidato';
import { CrearHojaTrabajoService } from 'app/empresa/crear-hoja-trabajo.service';

export interface DialogData {
  python: boolean;
  java: boolean;
  scrum: boolean;
  universitaria: boolean;
  tecnologica: boolean;
  tecnica: boolean;
}

@Component({
  selector: 'app-crear-hoja-trabajo',
  templateUrl: './crear-hoja-trabajo.component.html',
  styleUrls: ['./crear-hoja-trabajo.component.scss']
})
export class CrearHojaTrabajoComponent implements OnInit {
  crearHojaTrabajoForm!: FormGroup;
  hide : boolean = true;
  error: boolean = false;
  displayedColumns: string[] = ['nombre', 'fecha_evaluacion', 'evaluaciones', 'seleccionar'];
  candidatosDisponiblesDataSource = new CandidatosDisponiblesDataSource(this.consultarCandidatosDisponiblesService);
  selection = new SelectionModel<any>(true, []);

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router,
    private consultarCandidatosDisponiblesService: ConsultarCandidatosDisponiblesService,
    public translate: TranslateService,
    public dialogoFiltrarCandidatos: MatDialog,
    private crearHojaTrabajoService: CrearHojaTrabajoService) { 
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
  }

  ngOnInit() {
    this.crearHojaTrabajoForm = this.formBuilder.group({
      nombre_trabajo: ["", [Validators.required, Validators.maxLength(100)]],
      descripcion_candidato_ideal: ["", [Validators.required, Validators.maxLength(5000)]],
    })
    this.candidatosDisponiblesDataSource.cargarCandidatos(sessionStorage.getItem("empresa-token"));
    this.error = false
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.candidatosDisponiblesDataSource.candidatos$.value.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.candidatosDisponiblesDataSource.candidatos$.value.forEach(row => this.selection.select(row));
  }

  goBack(){
    sessionStorage.setItem("pantalla_proyectos", "mis-proyectos")
    sessionStorage.setItem("pantalla_proyectos_index", "0")
    this._router.navigate(["gestion-empresa"])
    this.reloadComponent(true)
  }

  crearHojaTrabajo(hojaTrabajo: any){
     let candidatosSeleccionados: Candidato[] = []
     let candidatosSeleccionadosIds = []
     for(let item of this.selection.selected){
       candidatosSeleccionados.push(item)
     }
     candidatosSeleccionados.forEach(element => {
       candidatosSeleccionadosIds.push({"id": element.id})
     });
     hojaTrabajo.candidatos = candidatosSeleccionadosIds
     this.crearHojaTrabajoService.crearHojaTrabajo(hojaTrabajo, sessionStorage.getItem("empresa-token"), sessionStorage.getItem("proyecto_editar_id")).subscribe(res => {
       if (res.status_code == "201"){
         this.toastr.success("Success", "Work sheet succesfully created")
         this.goBack()
       }else{
         this.error = true
         this.toastr.error("Error", "Work sheet creation error: "+res.error.message)  
       }},
       error => {
         this.error = true
         this.toastr.error("Error", "Work sheet creation error: "+error.error.message)
       });
  }

  openSearchDialog() {
    const dialogRef = this.dialogoFiltrarCandidatos.open(DialogBuscarCandidatosDialog, {
        data: {python: false, java: false, scrum: false, universitaria: false, tecnologica: false, tecnica: false, limpiar: false},
        width: '800px',
      });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result.limpiar){
        this.candidatosDisponiblesDataSource.cargarCandidatos(sessionStorage.getItem("empresa-token"));
      }
      else{
        this.candidatosDisponiblesDataSource.filtrarCandidatos(result);
      }
    });
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
   console.log("Current route I am on:",this._router.url);
   const url=self ? this._router.url :urlToNavigateTo;
   this._router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this._router.navigate([`/${url}`]).then(()=>{
       console.log(`After navigation I am on:${this._router.url}`)
     })
   })
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}


@Component({
  selector: 'dialog-buscar-candidatos',
  templateUrl: 'dialog-buscar-candidatos.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule, MatCheckboxModule, FormsModule],
})
export class DialogBuscarCandidatosDialog {
  constructor(
    public translate: TranslateService,
    public dialogRef: MatDialogRef<DialogBuscarCandidatosDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
  }
  tec_python = false;
  tec_java = false;
  tec_scrum = false;
  edu_universitaria = false;
  edu_tecnologica = false;
  edu_tecnica = false;

  filtrarCandidatos() { 
    this.data["python"] = this.tec_python;
    this.data["java"] = this.tec_java;
    this.data["scrum"] = this.tec_scrum;
    this.data["universitaria"] = this.edu_universitaria;
    this.data["tecnologica"] = this.edu_tecnologica;
    this.data["tecnica"] = this.edu_tecnica;
  }

  limpiarFiltros() {
    this.data["limpiar"] = true; 
  }
}