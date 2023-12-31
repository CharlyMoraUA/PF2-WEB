import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CrearEmpresaService } from 'app/empresa/crear-empresa.service';
import { Empresa } from '../representaciones/empresa';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.scss']
})
export class CrearEmpresaComponent implements OnInit {
  crearEmpresaForm!: FormGroup;
  hide : boolean = true;
  error: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private crearEmpresaService: CrearEmpresaService,
    private _router: Router,
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
   }

  ngOnInit() {
    this.crearEmpresaForm = this.formBuilder.group({
      empresa_tipo_doc: ["", Validators.required],
      empresa_num_doc: ["", [Validators.required, Validators.minLength(5)]],
      empresa_nombre: ["", [Validators.required, Validators.minLength(5)]],
      empresa_telefono: ["", [Validators.required, Validators.minLength(7), Validators.pattern('[- +()0-9]+')]],
      empresa_email: ["", [Validators.required, Validators.email]],
      representante_tipo_doc: ["", Validators.required],
      representante_num_doc: ["", [Validators.required, Validators.minLength(5)]],
      representante_nombre: ["", [Validators.required, Validators.minLength(5)]],
      representante_telefono: ["", [Validators.required, Validators.minLength(7), Validators.pattern('[- +()0-9]+')]],
      representante_email: ["", [Validators.required, Validators.email]],
      representante_usuario: ["", [Validators.required, Validators.minLength(5)]],
      representante_clave: ["", [Validators.required, Validators.minLength(5)]],
    })
    this.error = false
  }

  crearEmpresa(empresa: Empresa){
    this.crearEmpresaService.crearEmpresa(empresa).subscribe(res => {
      if (res.status_code == "200"){
        this.toastr.success("Success", "Company succesfully created")
        this._router.navigate(["landing"])
      }else{
        this.error = true
        this.toastr.error("Error", res.message)  
      }

    },
    error => {
      this.error = true
      this.toastr.error("Error", "Company SignUp error: "+error.error.message)
    })
  }

  backToLanding(){
    this._router.navigate(["landing"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
