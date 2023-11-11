import { Component, Inject, OnInit } from '@angular/core';
import { CandidatoInfoService } from '../candidatoInfo.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { infoLaboral } from '../representaciones/infoLaboral';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

export interface DialogData {
  cargo: string;
  ano_inicio: number;
  ano_fin: number;
  empresa: string;
  descripcion: string;
}

@Component({
  selector: 'app-candidato-infoLaboral',
  templateUrl: './candidato-infoLaboral.component.html',
  styleUrls: ['./candidato-infoLaboral.component.scss']
})
export class CandidatoInfoLaboralComponent implements OnInit {
  cargo: string = "";
  ano_inicio: number = null;
  ano_fin: number = null;
  empresa: string = "";
  descripcion: string = "";
  error: boolean = false
  lista: string[] = [];

  constructor(
    private candidatoInfoService: CandidatoInfoService,
    private _router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    public translate: TranslateService,
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
    this.consultarInfoLaboral(sessionStorage.getItem("id_candidato"));
  }

  ngOnInit() {
  }

  consultarInfoLaboral(id_candidato){
    this.candidatoInfoService.obtenerInfoLaboral(id_candidato, sessionStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

  backToInfo(){
    this._router.navigate(["editarCandidatos"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAgregarInfoLaboralDialog, {
      data: {cargo: "", ano_inicio: null, ano_fin: null, empresa: "", descripcion: ""},
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargo = result.cargo
      this.ano_inicio = result.ano_inicio
      this.ano_fin = result.ano_fin
      this.empresa = result.empresa
      this.descripcion = result.descripcion
      if (this.cargo && this.ano_inicio && this.ano_fin && this.empresa) {
        this.guardarInfoLaboral()
        this._router.navigate(["editarCandidatos"])
      }else{
        this.toastr.error("Error", "Faltan campos por llenar")
      }
      
    });
  }

  guardarInfoLaboral(){
    console.log("El cargo es: ", this.cargo)
    let id_candidato: number = + sessionStorage.getItem("id_candidato")
    console.log("El id del candidato es: ", id_candidato)
    let info_laboral = new infoLaboral(this.cargo, this.ano_inicio, this.ano_fin, this.empresa, this.descripcion, id_candidato)
    this.candidatoInfoService.agregarInfoLaboral(info_laboral, sessionStorage.getItem("candidato-token")).subscribe(res => {
      if (res.status_code == "201"){
        this.toastr.success("Información laboral guardada correctamente")
        console.info("Información laboral guardada correctamente: ", res)
      }else{
        this.error = true
        this.toastr.error("Error", res.message)
      }
    })
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}


@Component({
  selector: 'dialog-agregar-info-laboral',
  templateUrl: 'dialog-agregar-info-laboral.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule, TranslateModule],
})

export class DialogAgregarInfoLaboralDialog {
  constructor(
    public translate: TranslateService,
    public dialogRef: MatDialogRef<DialogAgregarInfoLaboralDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}