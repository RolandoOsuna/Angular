import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  mensaje = '';
  registrado: boolean = false;
  identificador: string;

  muestraMensaje(mensaje:String){
    alert(mensaje);
  }

  login(){
    if(this.email == "" || this.password == ""){
      alert("Completa los campos");
    }else{
      // this.muestraMensaje('Email del usuario es: '+ this.email);
     this.registrado=true;
    }
    const createDeviceID = () => {
      return screen.width + "x" + screen.height + ":" + navigator.userAgent;
    };
    console.log(screen.width + "x" + screen.height + ":" + navigator.userAgent);

    this.identificador = screen.width + "x" + screen.height + ":" + navigator.userAgent;
  }
}
