import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-video16-directivas3',
  templateUrl: './video16-directivas3.component.html',
  styleUrls: ['./video16-directivas3.component.css']
})
export class Video16Directivas3Component {

  empleados:Empleado[]=[
    new Empleado("Rolando", "Osuna", "CEO", 45000),
    new Empleado("Aristeo", "Ibarra", "CEO", 45000),
    new Empleado("Alexis", "Hernandez", "CEO", 45000)
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
    if(this.cuadroNombre == "" ||this.cuadroApellido == ""||this.cuadroCargo == ""||this.cuadroSalario == 0){
      this.empleados.pop();
      alert("Completa todos los campos");
    }
  }

  
} 
