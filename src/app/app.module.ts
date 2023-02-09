import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Video16Directivas3Component } from './video16-directivas3/video16-directivas3.component';
import { Video19ComunicacionComponentesComponent } from './video16-directivas3/video19-comunicacion-componentes/video19-comunicacion-componentes.component';
import { CaracteristicasEmpleadoComponent } from './video16-directivas3/caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadoService } from './video16-directivas3/servicio-empleado.service';
import { EmpleadosService } from './video16-directivas3/empleados.service';
import { HomeComponentComponent } from './video16-directivas3/home-component/home-component.component';
import { ProyectosComponentComponent } from './video16-directivas3/proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './video16-directivas3/quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './video16-directivas3/contacto-component/contacto-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ActualizaComponetComponent } from './video16-directivas3/actualiza-componet/actualiza-componet.component';
import { DataServises } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes-somos', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'login', component:LoginComponent},
  {path:'actualiza/:id', component:ActualizaComponetComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    Video16Directivas3Component,
    Video19ComunicacionComponentesComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadoService,EmpleadosService, DataServises],
  bootstrap: [AppComponent]
})
export class AppModule { }
