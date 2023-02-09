import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServises } from '../data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  constructor(private servicioVentanaEmergente:ServicioEmpleadoService, private dataServices: DataServises) { }


  empleados:Empleado[]=[
    new Empleado("Rolando", "Osuna", "CEO", 45000),
    new Empleado("Aristeo", "Ibarra", "CEO", 45000),
    new Empleado("Alexis", "Hernandez", "CEO", 45000)
  ];
  
  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Nombre: " + empleado.nombre + empleado.apellido +"\n" + "Cargo: " + empleado.cargo + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);

    this.dataServices.guardarEmpleados(this.empleados);

  }
  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }
  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }
  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
  }
}
