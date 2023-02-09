import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {
  empleados:Empleado[]=[];

  constructor(private router: Router, private empleadosService:EmpleadosService){
    this.empleados=this.empleadosService.empleados;
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  
  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // VALIDACION DE CAMPOS VACIOS
    if(this.cuadroNombre == "" ||this.cuadroApellido == ""||this.cuadroCargo == ""||this.cuadroSalario == 0){
      this.empleadosService.empleados.pop();
      alert("Completa todos los campos");
    }else{
      this.empleadosService.agregarEmpleadoServicio(miEmpleado);
      this.router.navigate(['']);
    }
  }


  volverHome(){
    this.router.navigate(['']);
  }

}
