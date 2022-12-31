import { Component } from '@angular/core';
import { ServicioEmpleadoService } from './video16-directivas3/servicio-empleado.service';

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

  constructor(private miServicio:ServicioEmpleadoService){
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
      // INYECCION DE SERVICIOS
      this.miServicio.muestraMensaje('Nombre del usuario es: '+ this.nombre);
      this.registrado = true;
    }
  }
}
