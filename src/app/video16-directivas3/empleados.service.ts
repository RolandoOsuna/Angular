import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  constructor(private servicioVentanaEmergente:ServicioEmpleadoService) { }


  empleados:Empleado[]=[
    new Empleado("Rolando", "Osuna", "CEO", 45000),
    new Empleado("Aristeo", "Ibarra", "CEO", 45000),
    new Empleado("Alexis", "Hernandez", "CEO", 45000)
  ];
  
  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Nombre: " + empleado.nombre + empleado.apellido +"\n" + "Cargo: " + empleado.cargo + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
  }
}
