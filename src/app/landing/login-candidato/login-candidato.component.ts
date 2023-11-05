import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionCandidatoService } from '../autenticacion-candidato.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-candidato',
  templateUrl: './login-candidato.component.html',
  styleUrls: ['./login-candidato.component.scss']
})
export class LoginCandidatoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private autenticacionCandidatoService: AutenticacionCandidatoService,
    private toastr: ToastrService, public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
   }

  error: boolean = false
  helper = new JwtHelperService();
  loginCandidatoForm!: FormGroup;

  ngOnInit(): void {
    this.loginCandidatoForm = this.formBuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required],
    })
    this.error = false
  }


  loginCandidato(usuario: string, clave: string){
    this.autenticacionCandidatoService.candidatoLogIn(usuario, clave)
      .subscribe(res => {
        sessionStorage.setItem('candidato-token', res.token);
        sessionStorage.setItem('id_candidato', res.info_candidato.id);
        sessionStorage.setItem('usertype', 'candidato');
        this._router.navigate(["dashboard"])
      },
        error => {
          this.error = true
          this.toastr.error("Error", "Authentication failed")
        })

    return true;
  }

  backToLanding(){
    this._router.navigate(["landing"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}