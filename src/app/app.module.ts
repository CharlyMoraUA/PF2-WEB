import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LandingComponent } from './landing/landing.component';
import { LoginEmpresaComponent } from './landing/login-empresa/login-empresa.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginCandidatoComponent } from './landing/login-candidato/login-candidato.component';
import { CandidatoComponent } from 'app/candidato/candidato-crear/candidato.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { MatIconModule } from '@angular/material/icon';
// import { ConsultarEquipoComponent } from './empresa/consultar-equipo/consultar-equipo.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginCandidatoComponent, 
    LandingComponent,
    LoginEmpresaComponent,
    CandidatoComponent,
    CrearEmpresaComponent,
  ],
  providers:[ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
