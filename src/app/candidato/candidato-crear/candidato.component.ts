import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CandidatoCrearService } from '../candidatoCrear.service';
import { Candidato } from '../candidato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  candidatoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private candidatoService: CandidatoCrearService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.candidatoForm = this.formBuilder.group({
      tipo_doc: ["", Validators.minLength(2)],
      num_doc: ["", Validators.required],
      nombre: ["", [Validators.required, Validators.minLength(5)]],
      usuario: ["", Validators.required],
      clave: ["", Validators.required],
      telefono: ["", Validators.required],
      email: ["", Validators.required],
      pais: ["", Validators.required],
      ciudad: ["", Validators.required],
      aspiracion_salarial: ["", Validators.required],
      fecha_nacimiento: ["", Validators.required],
      idiomas: ["", Validators.required]
    })
  }
  

  crearCandidato(candidato: Candidato){
    this.candidatoService.crearCandidato(candidato).subscribe(candidato=>{
      console.info("Candidato creado correctamente: ", candidato)
      this.toastr.success("Candidato creado")
      this.candidatoForm.reset();
    })
  }


  backToLanding(){
    this._router.navigate(["landing"])
  }

}
