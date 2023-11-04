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
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GestionCandidatoComponent } from 'app/candidato/gestion/gestion.component';
import { HistorialEntrevistasComponent } from 'app/candidato/gestion/historial-entrevistas/historial-entrevistas.component';
import { GestionEmpresaComponent } from 'app/empresa/gestion-empresa/gestion-empresa.component';
import { CrearProyectoComponent } from 'app/empresa/gestion-empresa/crear-proyecto/crear-proyecto.component';
import { ConsultarEquipoComponent } from 'app/empresa/consultar-equipo/consultar-equipo.component';
import { MatIconModule } from '@angular/material/icon';

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
    MatCheckboxModule
  ],
  declarations: [
    UserProfileComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GestionCandidatoComponent,
    HistorialEntrevistasComponent,
    GestionEmpresaComponent,
    CrearProyectoComponent,
    ConsultarEquipoComponent
    
  ]
})

export class AdminLayoutModule {}
