import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-video19-comunicacion-componentes',
  templateUrl: './video19-comunicacion-componentes.component.html',
  styleUrls: ['./video19-comunicacion-componentes.component.css']
})
export class Video19ComunicacionComponentesComponent {
  items: any;
  addItem($event: string) {
    throw new Error('Method not implemented.');
  } 
  @Input() empleadoDeLista:Empleado;

}
