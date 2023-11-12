import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Entrevista } from 'app/candidato/representaciones/entrevista';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { ResultadosEntrevistasService } from 'app/candidato/resultadosEntrevistas.service';

@Component({
  selector: 'app-resultadosEntrevistas',
  templateUrl: './resultadosEntrevistas.component.html',
  styleUrls: ['./resultadosEntrevistas.component.scss']
})
export class ResultadosEntrevistasComponent implements OnInit {

  entrevistasForm!: FormGroup;
  entrevistas: Array<Entrevista> = [];

  constructor(
    private resultadosEntrevistasService : ResultadosEntrevistasService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router,
    public translate: TranslateService

  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
   }

  ngOnInit() {
    this.entrevistasForm = this.formBuilder.group({
      tipo_doc: ["", Validators.required],
      num_doc: ["", [Validators.required, Validators.minLength(5)]]
    })
  }

  obtenerResultados(entrevista){
    this.resultadosEntrevistasService.obtenerResulEntrevistas(entrevista.tipo_doc, entrevista.num_doc, entrevista.id_empresa, sessionStorage.getItem("empresa-token")).subscribe(entrevista=>{
      console.info("Información de entrevistas: ", entrevista)
    })
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
