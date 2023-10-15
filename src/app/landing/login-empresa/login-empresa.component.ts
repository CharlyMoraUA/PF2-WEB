import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.scss']
})
export class LoginEmpresaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router
  ) { }

  loginEmpresaForm!: FormGroup;
  
  ngOnInit(): void {

    this.loginEmpresaForm = this.formBuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required],
    })

  }


  loginEmpresa(){
    console.log("loggedIn")
  }

  backToLanding(){
    this._router.navigate(["landing"])
  }

}
