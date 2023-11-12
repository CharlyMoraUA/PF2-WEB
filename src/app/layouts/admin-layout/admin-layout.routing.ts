import { Routes } from '@angular/router';

//import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { GestionCandidatoComponent } from 'app/candidato/gestion/gestion.component';
import { CandidatoEditarComponent } from 'app/candidato/candidato-editar/candidatoEditar.component';
import { CandidatoInfoTecnicaComponent } from 'app/candidato/candidato-infoTecnica/candidatoInfoTecnica/candidatoInfoTecnica.component';
import { GestionEmpresaComponent } from 'app/empresa/gestion-empresa/gestion-empresa.component';
import { CrearProyectoComponent } from 'app/empresa/gestion-empresa/crear-proyecto/crear-proyecto.component';
import { CandidatoInfoLaboralComponent } from 'app/candidato/candidato-infoLaboral/candidato-infoLaboral.component';
import { ResultadosEntrevistasComponent } from 'app/candidato/gestion/resultados-entrevistas/resultadosEntrevistas.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'gestionCandidatos',      component: GestionCandidatoComponent },
    { path: 'gestion-empresa',        component: GestionEmpresaComponent },
    // { path: 'gestionEmpresa',         component: GestionEmpresaComponent},
    { path: 'user-profile',           component: UserProfileComponent },
    { path: 'typography',             component: TypographyComponent },
    { path: 'icons',                  component: IconsComponent },
    { path: 'notifications',          component: NotificationsComponent },
    { path: 'upgrade',                component: UpgradeComponent },
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'gestionCandidatos',      component: GestionCandidatoComponent },
    { path: 'editarCandidatos',       component:  CandidatoEditarComponent},
    { path: 'infoTecnica',            component:  CandidatoInfoTecnicaComponent},
    { path: 'infoLaboral',            component:  CandidatoInfoLaboralComponent},
    //{ path: 'dashboard',              component: DashboardComponent },
    { path: 'user-profile',           component: UserProfileComponent },
    //{ path: 'table-list',             component: TableListComponent },
    { path: 'typography',             component: TypographyComponent },
    { path: 'icons',                  component: IconsComponent },
    //{ path: 'maps',                   component: MapsComponent },
    { path: 'notifications',          component: NotificationsComponent },
    { path: 'upgrade',                component: UpgradeComponent },
    { path: 'crear-proyecto',         component: CrearProyectoComponent },
    { path: 'resultadosEntrevistas',  component: ResultadosEntrevistasComponent },

];
