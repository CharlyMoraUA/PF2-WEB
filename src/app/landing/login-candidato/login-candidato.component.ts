import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionCandidatoService } from '../autenticacion-candidato.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
  ) { }

  error: boolean = false
  helper = new JwtHelperService();
  loginCandidatoForm!: FormGroup;

  ngOnInit(): void {

    this.loginCandidatoForm = this.formBuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required],
    })

  }


  loginCandidato(usuario, clave){
    this.error = false
    this.autenticacionCandidatoService.candidatoLogIn(usuario, clave)
      .subscribe(res => {
        sessionStorage.setItem('candidato-token', res.token);
        console.log("Candidato autenticado con token: "+res.token);
        this._router.navigate(["dashboard"])
      },
        error => {
          console.log(error);
          this.error = true
          this.toastr.error("Error", "Autenticación fallida")
        })
  }

  backToLanding(){
    this._router.navigate(["landing"])
  }

}