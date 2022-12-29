import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  mensaje = '';
  registrado = false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas:any;

  constructor(){
    this.entradas = [
      {titulo:"C++"},
      {titulo:"C#"},
      {titulo:"Javascript"},
      {titulo:"PHP"}
    ]
  }

  registrarUsuario(){
    this.mensaje = 'Usuario registrado correctamente'
    if(this.nombre == "" || this.apellido == ""){
      alert("Completa los campos");
    }else{
      this.registrado = true;
    }
  }
}
