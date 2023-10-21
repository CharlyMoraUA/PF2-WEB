import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AutenticacionCandidatoService } from '../autenticacion-candidato.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.scss']
})
export class LoginEmpresaComponent implements OnInit {
[x: string]: any;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router, 
    private autenticacionCandidatoService: AutenticacionCandidatoService,
    private toastr: ToastrService,
  ) { }

  loginEmpresaForm!: FormGroup;
  error: boolean = false
  helper = new JwtHelperService();
  
  ngOnInit(): void {

    this.loginEmpresaForm = this.formBuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required],
    })

  }


  loginEmpresa(usuario: string, clave: string){
    this.error = false
    this.autenticacionCandidatoService.empresaLogIn(usuario, clave)
      .subscribe(res => {
        sessionStorage.setItem('empresa-token', res.token);
        sessionStorage.setItem('id_empresa', res.info_empresa.id_empresa);
        sessionStorage.setItem('id_representante', res.info_representante.id_representante);
        sessionStorage.setItem('nombre_representante', res.info_representante.nombre);
        sessionStorage.setItem('num_doc_representante', res.info_representante.num_doc);
        sessionStorage.setItem('tipo_doc_representante', res.info_representante.tipo_doc);
        sessionStorage.setItem('usuario_representante', res.info_representante.usuario);
        sessionStorage.setItem('nombre_empresa', res.info_empresa.nombre);

        console.log('empresa-token', res.token);
        console.log('id_empresa', res.info_empresa.id_empresa);
        console.log('id_representante', res.info_representante.id_representante);
        console.log('nombre_representante', res.info_representante.nombre);
        console.log('num_doc_representante', res.info_representante.num_doc);
        console.log('tipo_doc_representante', res.info_representante.tipo_doc);
        console.log('usuario_representante', res.info_representante.usuario);
        console.log('nombre_empresa', res.info_empresa.nombre);

        console.log("Empresa autenticada con token: ");
        console.log(res)
        this.toastr.info("Exito!", "Auitenticacion Exitosa")
        //this._router.navigate(["dashboard"])
      },
        error => {
          console.log(error);
          this.error = true
          this.toastr.error("Error", "Authentication failed")
        })
    console.log("loggedIn")
  }

  backToLanding(){
    this._router.navigate(["landing"])
  }

}
