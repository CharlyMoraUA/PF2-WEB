import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CandidatoCrearService } from '../candidatoCrear.service';
import { Candidato } from '../representaciones/candidato';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  candidatoForm!: FormGroup;
  hide : boolean = true;
  idiomas = new FormControl('');
  idiomasList: string[] = ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Ruso'];
  candidatos: Array<Candidato> = [];


  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private candidatoService: CandidatoCrearService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.candidatoForm = this.formBuilder.group({
      tipo_doc: ["", Validators.required],
      num_doc: ["", [Validators.required, Validators.minLength(5)]],
      nombre: ["", [Validators.required, Validators.minLength(5)]],
      usuario: ["", [Validators.required, Validators.minLength(5)]],
      clave: ["", Validators.required],
      telefono: ["", [Validators.required, Validators.minLength(7), Validators.pattern('[- +()0-9]+')]],
      email: ["", [Validators.required, Validators.email]],
      pais: ["", Validators.required],
      ciudad: ["", Validators.required],
      aspiracion_salarial: ["", [Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]],
      fecha_nacimiento: ["", [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      idiomas: ["Español"]
    })
  }

  myFunction() {
    this.hide = !this.hide;
  }
  

  crearCandidato(candidato: Candidato){
    this.candidatoService.crearCandidato(candidato).subscribe(candidato=>{
      console.info("Candidato creado correctamente: ", candidato)
      this.toastr.success("Confirmación", "Candidato creado")
      this._router.navigate(["dashboard"])
    })
  }

  backToLanding(){
    this._router.navigate(["landing"])
  }

}
