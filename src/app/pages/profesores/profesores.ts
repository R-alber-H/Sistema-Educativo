import { Component, OnInit, ViewChild,inject } from '@angular/core';
import { ModalRegistrarProfesor } from "../../components/modal-registrar-profesor/modal-registrar-profesor";
import { ModalEditarProfesor } from "../../components/modal-editar-profesor/modal-editar-profesor/modal-editar-profesor";
import { ProfesoresService } from '../../services/profesores/profesores-service';
import { AuthService } from '../../services/auth/auth-service';
import { AsyncPipe } from '@angular/common';
import { SweetAlertService } from '../../sweetalert/sweetalert-service';

@Component({
  selector: 'app-profesores',
  imports: [ModalRegistrarProfesor, ModalEditarProfesor,AsyncPipe],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores implements OnInit{
  

   @ViewChild(ModalRegistrarProfesor) modalRegistro!: ModalRegistrarProfesor;
   @ViewChild(ModalEditarProfesor) modalEdicion!: ModalEditarProfesor;

   private profesorService = inject(ProfesoresService);
   private auth = inject(AuthService);

   profesores : any[]=[];
   usuario$ = this.auth.usuarioActual$;

   ngOnInit(){
       this.profesorService.profesores$.subscribe(p => this.profesores = p);
       this.profesorService.obtenerProfesores().subscribe({
      next: (data: any) => {
        this.profesores = data;
      },
      error: (err) => console.error('Error al traer profesores:', err)
    });
   }
   
   abrirModal(){
    this.modalRegistro.abrirModal();
   }

   abrirModalEdicion(profesor:any){
    this.modalEdicion.abrirModal(profesor);
   }

   eliminarProfesor(id:number){
    this.profesorService.eliminarProfesor(id).subscribe({
      next: () =>SweetAlertService.exito("Profesor eliminado"),
      error: err => console.error("Error al eliminar", err)
    });
   }
}
