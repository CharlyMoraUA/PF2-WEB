import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CandidatoInfoService } from 'app/candidato/candidatoInfo.service';
import { MatSelectModule } from '@angular/material/select';
import { infoTecnica } from 'app/candidato/representaciones/infoTecnica';

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
  tipoHabilidad: string[] = ['ROL', 'TECNOLOGIA', 'LENGUAJE']

  constructor(
    private candidatoInfoService: CandidatoInfoService,
    private _router: Router,
    public dialog: MatDialog,
  ) { }

  lista:any = {};

  ngOnInit(): void {
    this.consultarInfoTecnica(localStorage.getItem("id_candidato"))
  }

  consultarInfoTecnica(id_candidato){
    this.candidatoInfoService.obtenerInfoTecnica(id_candidato, localStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

  backToInfo(){
    this._router.navigate(["editarCandidatos"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {tipoHabilidad: this.tipoHabilidad, valor: this.valor},
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

  guardarInfoTecnica(){
    let id_candidato: number = + localStorage.getItem("id_candidato")
    console.log("El id del candidato es: ", id_candidato)
    let infotecnica = new infoTecnica(1, this.tipo, this.valor, id_candidato)
    this.candidatoInfoService.agregarInfoTecnica(infotecnica, localStorage.getItem("candidato-token")).subscribe(infotecnica=>{
      console.info("Información técnica guardada correctamente: ", infotecnica)
    })
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule],
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