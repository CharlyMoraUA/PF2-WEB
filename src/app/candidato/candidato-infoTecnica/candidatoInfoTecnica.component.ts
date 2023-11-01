import { Component, Inject, OnInit } from '@angular/core';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { infoTecnica } from '../representaciones/infoTecnica';
import { Observable, of } from "rxjs";

export interface DialogData {
  tipo: string;
  valor: string;
}

@Component({
  selector: 'app-candidatoInfoTecnica',
  templateUrl: './candidatoInfoTecnica.component.html',
  styleUrls: ['./candidatoInfoTecnica.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    MatIconModule,
  ],
})
export class CandidatoInfoTecnicaComponent implements OnInit {

  tipo: string;
  valor: string;
  
  constructor(
    private candidatoService: CandidatoCrearService,
    private _router: Router,
    public dialog: MatDialog,

  ) { }

  lista:any;

  ngOnInit(): void {
    this.consultarInfoTecnica(sessionStorage.getItem("id_candidato"))
  }

  consultarInfoTecnica(id_candidato){
    this.candidatoService.obtenerInfoTecnica(id_candidato).subscribe(candidato=>{
      this.lista = candidato.response
      console.log("La lista es: ", this.lista)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {tipo: this.tipo, valor: this.valor},
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.tipo = result.tipo,
      this.valor = result.valor
      console.log("tipo: ", this.tipo)
      console.log("valor: ", this.valor)
      this.guardarInfoTecnica()
    });
  }

  backToInfo(){
    this._router.navigate(["editarCandidatos"])
  }

  guardarInfoTecnica(){
    let id_candidato: number = +sessionStorage.getItem("id_candidato")
    console.log("El id del candidato es: ", id_candidato)
    let infotecnica = new infoTecnica(1,this.tipo,this.valor,id_candidato)
    this.candidatoService.agregarInfoTecnica(infotecnica, sessionStorage.getItem("candidato-token")).subscribe(infotecnica=>{
      console.info("Información técnica guardada correctamente: ", infotecnica)
    })
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}