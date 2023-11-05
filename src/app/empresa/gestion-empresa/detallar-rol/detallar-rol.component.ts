import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConsultarFichasService } from 'app/empresa/consultar-fichas.service';
import { RolInput } from 'app/empresa/representaciones/rol_input';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detallar-rol',
  templateUrl: './detallar-rol.component.html',
  styleUrls: ['./detallar-rol.component.scss']
})
export class DetallarRolComponent implements OnInit {
  detallarRolForm!: FormGroup;
  tecnicas:[] = []
  blandas:[] = []
  habilidadesGenerales:any = []
  blandasToGo = []
  tecnicasToGo = []

  constructor(private formBuilder: FormBuilder,
    private fichaService: ConsultarFichasService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<DetallarRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public translate: TranslateService) {
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
    }
 
  ngOnInit(): void {
    this.detallarRolForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      descripcion: ["", [Validators.required]],
      blandas : ["", []],
      tecnicas : ["", []],
    })
    this.consultarHabilidades()

  }

  actualizarRol(rol: RolInput){
    this.fichaService.actualizarRol(this.data.id_rol,rol.titulo,rol.descripcion,rol.blandas,rol.tecnicas,sessionStorage.getItem("empresa-token")).subscribe(rol=>{
      this.toastr.success("Confirmación", "rol detallado")
      this.dialogRef.close();
    })
  }

  consultarHabilidades(){
    this.fichaService.consultarHabilidades(sessionStorage.getItem("empresa-token")).subscribe(response=>{
      response.habilidades.forEach(element => {
        let habilidadTmp = {
          "tipo" : element.tipo,
          "id_habilidad" : element.id_habilidad,
          "habilidad" : element.habilidad,
          "checked" : false
        }
        this.habilidadesGenerales.push(habilidadTmp);
      });
      this.tecnicas = this.habilidadesGenerales.filter(habilidad => habilidad.tipo == "tecnica")
      this.blandas = this.habilidadesGenerales.filter(habilidad => habilidad.tipo == "blanda")
    })
  }

   //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
