import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-componet',
  templateUrl: './actualiza-componet.component.html',
  styleUrls: ['./actualiza-componet.component.css']
})
export class ActualizaComponetComponent {
  empleados:Empleado[]=[];
  
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice:number; //Variable con la que se va a tomar el indice
  constructor(private router: Router, private empleadosService:EmpleadosService, private route: ActivatedRoute){
    this.empleados=this.empleadosService.empleados;
    
    this.indice = this.route.snapshot.params['id']; //Almacenando el índice que viene de la URL
    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice); //Creando un objeto que manda a llamar un método donde se le devolverá un empleado

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

  }

 
  
  actualizaEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // VALIDACION DE CAMPOS VACIOS
    if(this.cuadroNombre == "" ||this.cuadroApellido == ""||this.cuadroCargo == ""||this.cuadroSalario == 0){
      this.empleadosService.empleados.pop();
      alert("Completa todos los campos");
    }else{
      this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
      alert('Empleado actualizado exitosamente');
      this.router.navigate(['']);//Volver a Home
    }
  }

  eliminaEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
    alert('Empleado eliminado exitosamente');
  }
  

}
