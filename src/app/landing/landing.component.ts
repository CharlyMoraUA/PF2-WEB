import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private _router: Router,
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
  }

  goToLoginEmpresa(){
    this._router.navigate(["login-company"])
  }

  goToRegistroCandidato(){
    this._router.navigate(["candidato"])
  }
  
  goToRegistroEmpresa(){
    this._router.navigate(["crear-empresa"])
  }

  goToLoginCandidato(){
    this._router.navigate(["login-candidato"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
