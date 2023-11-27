import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ConsultarResultadosPruebasService } from '../consultar-resultados-pruebas.service';

@Component({
  selector: 'app-consultar-resultados-pruebas-tecnicas',
  templateUrl: './consultar-resultados-pruebas-tecnicas.component.html',
  styleUrls: ['./consultar-resultados-pruebas-tecnicas.component.css']
})
export class ConsultarResultadosPruebasTecnicasComponent implements OnInit {
  consultarPruebasForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consultarResultadosPruebasService: ConsultarResultadosPruebasService,
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
  }

  listaPruebas: any[] = [];
  username: string = '';
  noResults = false

  ngOnInit(): void {
    this.consultarPruebasForm = this.formBuilder.group({
      documento: ["", [Validators.required, Validators.maxLength(100)]]
    })
  }

  consultarDocumento(doc: string) {
    this.noResults = false
    console.log("doc")
    console.log(doc)
    this.consultarResultadosPruebasService.obtenerPruebas(doc).subscribe(
      (resp) => {
        console.log("resp")
        console.log(resp)
        console.log("pruebas")
        console.log(resp.pruebas)
        this.listaPruebas = resp.pruebas
        this.username = resp.nombre
        if (resp.pruebas == undefined || resp.pruebas.length == 0) {
          this.noResults = true
        }
      },
      (error) => {
        this.noResults = true
        console.log("error")
        console.log(error)
      }
    )

  }

    //Switch language
    translateLanguageTo(lang: string) {
      this.translate.use(lang);
    }

}
