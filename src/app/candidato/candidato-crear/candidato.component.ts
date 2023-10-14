import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CandidatoCrearService } from '../candidatoCrear.service';
import { Candidato } from '../candidato';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  artistForm!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private candidatoService: CandidatoCrearService
  ) { }

  ngOnInit() {
  }

  crearCandidato(candidato: Candidato){
    this.candidatoService.crearCandidato(candidato).subscribe(candidato=>{
      console.info("Candidato creado correctamente: ", candidato)
      this.toastr.success("Confirmation", "Artist created")
      this.artistForm.reset();
    })
  }

}
