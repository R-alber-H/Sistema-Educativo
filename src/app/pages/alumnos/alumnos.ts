import { Component,inject,ViewChild } from '@angular/core';
import { AlumnosRegistrados } from '../../datosSimulados/alumnos';
import { ModalRegistrarEstudiante } from "../../components/modal-registrar-estudiante/modal-registrar-estudiante";
import { ModalEditarEstudiante } from "../../components/modal-editar-estudiante/modal-editar-estudiante/modal-editar-estudiante";
import { AuthService } from '../../services/auth/auth-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  standalone:true,
  imports: [ModalRegistrarEstudiante, ModalEditarEstudiante,AsyncPipe],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {

  auth = inject(AuthService);
  
  usuario$ = this.auth.usuarioActual$;
  alumnosRegistrados = AlumnosRegistrados;

   @ViewChild(ModalRegistrarEstudiante) modalRegistro!: ModalRegistrarEstudiante;
   @ViewChild(ModalEditarEstudiante) modalEdicion!: ModalEditarEstudiante;

   abrirModal(){
    this.modalRegistro.abrirModal();
   }
   abrirModalEdicion(estudiante:any){
    this.modalEdicion.abrirModal(estudiante);
   }
}
