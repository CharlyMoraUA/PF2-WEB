import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearProyectoService } from 'app/empresa/crear-proyecto.service';
import { Proyecto } from 'app/empresa/representaciones/proyecto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {
  crearProyectoForm!: FormGroup;
  hide : boolean = true;
  error: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router,
    private crearProyectoService: CrearProyectoService) { }

  ngOnInit() {
    this.crearProyectoForm = this.formBuilder.group({
      titulo: ["", [Validators.required, Validators.maxLength(100)]],
      fecha_inicio: ["", [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      fecha_fin: ["", [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      equipos: [""]
    })
  }

  myFunction() {
    this.hide = !this.hide;
  }

  backToDashboard(){
    this._router.navigate(["dashboard-empresa"])
  }

  crearProyecto(proyecto: Proyecto){
    this.error = false
    this.crearProyectoService.crearProyecto(proyecto).subscribe(res => {
      if (res.status_code == "200"){
        this.toastr.success("Success", "Company succesfully created")
        this._router.navigate(["dashboard-empresa"])
      }else{
        this.error = true
        this.toastr.error("Error", res.message)  
      }

    },
    error => {
      console.log("Ocurrió un error:")
      console.log(error)
      this.error = true
      this.toastr.error("Error", "Company SignUp error: "+error.error.message)
    })
  }

}
