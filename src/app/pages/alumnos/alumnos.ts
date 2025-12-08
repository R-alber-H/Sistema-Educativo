import { Component,ViewChild } from '@angular/core';
import { AlumnosRegistrados } from '../../datosSimulados/alumnos';
import { ModalRegistrarEstudiante } from "../../components/modal-registrar-estudiante/modal-registrar-estudiante";

@Component({
  selector: 'app-alumnos',
  standalone:true,
  imports: [ModalRegistrarEstudiante],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {
  alumnosRegistrados = AlumnosRegistrados;

   @ViewChild(ModalRegistrarEstudiante) modalRegistro!: ModalRegistrarEstudiante;

   abrirModal(){
    this.modalRegistro.abrirModal();
   }
}
