import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GestionCandidatoComponent } from 'app/candidato/gestion/gestion.component';
import { HistorialEntrevistasComponent } from 'app/candidato/gestion/historial-entrevistas/historial-entrevistas.component';
import { CandidatoEditarComponent } from 'app/candidato/candidato-editar/candidatoEditar.component';
import { CandidatoInfoTecnicaComponent } from 'app/candidato/candidato-infoTecnica/candidatoInfoTecnica/candidatoInfoTecnica.component';
import { MatIconModule } from '@angular/material/icon';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';
import { CandidatoInfoService } from 'app/candidato/candidatoInfo.service';
import { HttpClientModule } from '@angular/common/http';
import { GestionEmpresaComponent } from 'app/empresa/gestion-empresa/gestion-empresa.component';
import { CrearProyectoComponent } from 'app/empresa/gestion-empresa/crear-proyecto/crear-proyecto.component';
import { MatTableModule } from '@angular/material/table';
import { EquiposDataSource } from 'app/empresa/datasources/EquiposDataSource';
import { ConsultarFichasService } from 'app/empresa/consultar-fichas.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MisProyectosComponent } from 'app/empresa/gestion-empresa/mis-proyectos/mis-proyectos.component';
import { EditarProyectoComponent } from 'app/empresa/gestion-empresa/editar-proyecto/editar-proyecto.component';
import { CrearHojaTrabajoComponent, DialogBuscarCandidatosDialog } from 'app/empresa/gestion-empresa/crear-hoja-trabajo/crear-hoja-trabajo.component';
import { ConsultarEquipoComponent } from 'app/empresa/consultar-equipo/consultar-equipo.component';
import { DetallarRolComponent } from 'app/empresa/gestion-empresa/detallar-rol/detallar-rol.component';



// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatDialogModule,
  ],
  declarations: [
    UserProfileComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GestionCandidatoComponent,
    HistorialEntrevistasComponent,
    CandidatoEditarComponent,
    CandidatoInfoTecnicaComponent,
    GestionEmpresaComponent,
    CrearProyectoComponent,
    MisProyectosComponent,
    EditarProyectoComponent,
    CrearHojaTrabajoComponent,
    ConsultarEquipoComponent,
    DetallarRolComponent
  ],
  providers:[
    CandidatoCrearService,
    CandidatoInfoService,
    EquiposDataSource,
    ConsultarFichasService
  ],

})

export class AdminLayoutModule {}
