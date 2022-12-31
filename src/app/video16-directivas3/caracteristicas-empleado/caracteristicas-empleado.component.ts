import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }
}
