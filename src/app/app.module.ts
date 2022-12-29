import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Video16Directivas3Component } from './video16-directivas3/video16-directivas3.component';
import { Video19ComunicacionComponentesComponent } from './video16-directivas3/video19-comunicacion-componentes/video19-comunicacion-componentes.component';

@NgModule({
  declarations: [
    AppComponent,
    Video16Directivas3Component,
    Video19ComunicacionComponentesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
