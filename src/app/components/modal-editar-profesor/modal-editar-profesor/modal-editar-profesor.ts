import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresService } from '../../../services/profesores/profesores-service';

@Component({
  selector: 'app-modal-editar-profesor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-editar-profesor.html',
  styleUrl: './modal-editar-profesor.css',
})
export class ModalEditarProfesor implements OnInit {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;
  private modal: any;

  formularioBuilder = inject(FormBuilder);
  profesorService = inject(ProfesoresService)

  profesorFormulario!: FormGroup;
  profesorActual: any;

  ngOnInit() {
    this.profesorFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      idClase: ['', Validators.required]
    });
  }

  abrirModal(profesor?:any) {
    this.profesorActual = profesor;
    if (profesor) {
      this.profesorFormulario.patchValue({
        nombre: profesor.nombre,
        apellidos:profesor.apellidos,
        idClase: profesor.clase.id
      });
    }
    this.modal = new (window as any).bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  cerrarModal() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  editarDatos() {
    if (this.profesorFormulario.valid) {
      const datosEditados = this.profesorFormulario.value;

      this.profesorService.editarDatos(this.profesorActual.id, datosEditados).subscribe({
        next: (res) => {
          console.log('Datos actualizados', res);
          this.cerrarModal();
        },
        error: (err) => console.error('Error al actualizar', err)
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
