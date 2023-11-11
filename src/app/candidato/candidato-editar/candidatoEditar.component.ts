import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoInfoService } from '../candidatoInfo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-candidatoEditar',
  templateUrl: './candidatoEditar.component.html',
  styleUrls: ['./candidatoEditar.component.scss']
})
export class CandidatoEditarComponent implements OnInit {

  constructor(
    private candidatoInfoService: CandidatoInfoService,
    private _router: Router,
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
   }

  lista:any = {};

  ngOnInit(): void {
    this.consultarInfo(sessionStorage.getItem("id_candidato"))
  }

  consultarInfo(id_candidato){
    this.candidatoInfoService.obtenerInfoCandidato(id_candidato, sessionStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

  goToInfoTecnica(){
    this._router.navigate(["infoTecnica"])
  }

  goToInfoLaboral(){
    this._router.navigate(["infoLaboral"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
