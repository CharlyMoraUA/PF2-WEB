import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConsultarProyectosService } from 'app/empresa/consultar-proyectos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-hojas-trabajo',
  templateUrl: './ver-hojas-trabajo.component.html',
  styleUrls: ['./ver-hojas-trabajo.component.scss']
})
export class VerHojasTrabajoComponent implements OnInit {
  crearEvaluacionForm!: FormGroup;
  hojasDetrabajo: any[] = [];
  candidatosHoja: any[] = [];
  verHojas=true
  candidato:any;
  constructor(
    private formBuilder: FormBuilder,
    private consultaProyectosService: ConsultarProyectosService,
    private _router: Router,
    private toastr: ToastrService,
    public translate: TranslateService) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.consultarHojasTrabajo()
    this.crearEvaluacionForm = this.formBuilder.group({
      evaluacion: ["", [Validators.required, Validators.maxLength(1000)]],
      puntaje: ["", [Validators.required, Validators.min(0), Validators.max(5), Validators.pattern(/^[0-5]$/)]],
    })
  }

  consultarHojasTrabajo() {
    this.consultaProyectosService.consultarHojasTrabajoProyectos(sessionStorage.getItem("id_empresa"), sessionStorage.getItem("proyecto_editar_id"), sessionStorage.getItem("empresa-token")).subscribe(resp => {
      console.log(resp)
      this.hojasDetrabajo = resp["hojasDetrabajo"];
    })
  }

  showCandidatos(id_hoja) {
    this.candidatosHoja = []
    this.consultaProyectosService.consultarCandidatosHojasTrabajo(sessionStorage.getItem("id_empresa"), sessionStorage.getItem("proyecto_editar_id"), id_hoja, sessionStorage.getItem("empresa-token")).subscribe(resp => {
      console.log("id_hoja")
      console.log(resp)
      this.candidatosHoja = resp["candidatos"];
    })
  }

  backToProyecto() {
    sessionStorage.setItem("pantalla_proyectos_index", "0")
    sessionStorage.setItem("pantalla_proyectos", "editar-proyecto")
    this._router.navigate(["editar-proyecto"])
    this.reloadComponent(true)
  }

  reloadComponent(self: boolean, urlToNavigateTo?: string) {
    const url = self ? this._router.url : urlToNavigateTo;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([`/${url}`]).then(() => {
        console.log(`After navigation I am on:${this._router.url}`)
      })
    })
  }

  
  crearEvaluacion(evaluacion: any){
    console.log("evaluacion")
    console.log(evaluacion)
    this.consultaProyectosService.crearEvaluacionCandidato(this.candidato.id, evaluacion, sessionStorage.getItem("empresa-token")).subscribe(resp=>{
      console.info("Candidato creado correctamente: ", resp)
      this.toastr.success("Confirmación", "Evaluacion creada")
      this.goToWorksheets()
    })
  }

  goToWorksheets(){
    sessionStorage.setItem("pantalla_proyectos", "hojas-de-trabajo")
    sessionStorage.setItem("pantalla_proyectos_index", "0")
    this._router.navigate(["gestion-empresa"])
    this.reloadComponent(true)
  }

  evaluarDesempeno(candidato:any){
    this.verHojas=false
    this.candidato=candidato;
  }

  backToHojas(){
    this.candidato= {};
    this.verHojas=true;
  }


  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
