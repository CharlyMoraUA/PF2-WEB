import { Component, Inject, OnInit } from '@angular/core';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface DialogData {
  tipo: string;
  valor: string;
}

@Component({
  selector: 'app-candidatoInfoTecnica',
  templateUrl: './candidatoInfoTecnica.component.html',
  styleUrls: ['./candidatoInfoTecnica.component.scss']
})
export class CandidatoInfoTecnicaComponent implements OnInit {

  tipo: string;
  valor: string;

  constructor(
    private candidatoService: CandidatoCrearService,
    private _router: Router,
    //public dialog: MatDialog,
  ) { }

  lista:any = {};

  ngOnInit(): void {
    this.consultarInfoTecnica(localStorage.getItem("id_candidato"))
  }

  consultarInfoTecnica(id_candidato){
    this.candidatoService.obtenerInfoTecnica(id_candidato, localStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

  backToInfo(){
    this._router.navigate(["editarCandidatos"])
  }

  openDialog(): void {
    /*const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
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
      //this.guardarInfoTecnica()
    });*/
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