import { Component, ViewChild, ElementRef, OnInit, inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EstudianteService } from '../../../services/estudiante/estudiante-service';

@Component({
  selector: 'app-modal-editar-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-editar-estudiante.html',
  styleUrl: './modal-editar-estudiante.css',
})
export class ModalEditarEstudiante implements OnInit{

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;
  private modal: any;

  formularioBuilder = inject(FormBuilder);
  estudianteService = inject(EstudianteService);

  estudianteFormulario!: FormGroup;
  estudianteActual: any;

  ngOnInit() {
    this.estudianteFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      idClase: ['', Validators.required]
    });
  }

  abrirModal(estudiante:any) {
    this.estudianteActual = estudiante;
    if (estudiante) {
      this.estudianteFormulario.patchValue({
        nombre: estudiante.nombre,
        apellidos:estudiante.apellidos,
        idClase:estudiante.clase.id
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
    if (this.estudianteFormulario.valid) {
      const datosEditados = this.estudianteFormulario.value;

      this.estudianteService.editarDatos(this.estudianteActual.id, datosEditados).subscribe({
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
