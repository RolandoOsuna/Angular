import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  empleados:Empleado[]=[];
  // CREACION DE LA INYECCIÓN
  constructor(private empleadosService:EmpleadosService ){
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
    }
  }
  // CARACTERISTICAS-EMPLEADO
  items = [''];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
