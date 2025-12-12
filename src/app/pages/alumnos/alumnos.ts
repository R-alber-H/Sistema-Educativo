import { Component,inject,OnInit,ViewChild } from '@angular/core';
import { ModalRegistrarEstudiante } from "../../components/modal-registrar-estudiante/modal-registrar-estudiante";
import { ModalEditarEstudiante } from "../../components/modal-editar-estudiante/modal-editar-estudiante/modal-editar-estudiante";
import { AuthService } from '../../services/auth/auth-service';
import { AsyncPipe } from '@angular/common';
import { EstudianteService } from '../../services/estudiante/estudiante-service';
import { SweetAlertService } from '../../sweetalert/sweetalert-service';

@Component({
  selector: 'app-alumnos',
  standalone:true,
  imports: [ModalRegistrarEstudiante, ModalEditarEstudiante,AsyncPipe],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos implements OnInit{

  estudianteService = inject(EstudianteService)
  auth = inject(AuthService);
  
  usuario$ = this.auth.usuarioActual$;
  estudiantes : any[]=[];
  

   @ViewChild(ModalRegistrarEstudiante) modalRegistro!: ModalRegistrarEstudiante;
   @ViewChild(ModalEditarEstudiante) modalEdicion!: ModalEditarEstudiante;

  ngOnInit(){
      this.estudianteService.estudiantes$.subscribe(e => this.estudiantes = e);
      this.estudianteService.obtenerEstudiantes().subscribe({
        next: (data: any) => {
        this.estudiantes = data;
      },
      error: (err) => console.error('Error al traer estudiantes:', err)
      })
  }

   abrirModal(){
    this.modalRegistro.abrirModal();
   }
   abrirModalEdicion(estudiante:any){
    this.modalEdicion.abrirModal(estudiante);
   }

   eliminarEstudiante(id:number){
    this.estudianteService.eliminarEstudiante(id).subscribe({
      next: () =>
        SweetAlertService.exito("estudiante eliminado"),
      error: err => console.error("Error al eliminar", err)
    });
   }
}
