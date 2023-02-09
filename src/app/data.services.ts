import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./video16-directivas3/empleado.model";

@Injectable()
export class DataServises{
    constructor(private httpClient:HttpClient){}

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.post('https://mis-clientes-57f34-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
            response => console.log("Guardado exitosamente", response),
            error => console.log("Error ", error),
        )
    }
}