import { Component, ViewChild, ElementRef, OnInit, inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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

  estudianteFormulario!: FormGroup;

  ngOnInit() {
    this.estudianteFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  abrirModal(estudiante:any) {
    if (estudiante) {
      this.estudianteFormulario.patchValue({
        nombre: estudiante.nombre,
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

  guardarCambios() {
    if (this.estudianteFormulario.valid) {
      console.log('Datos editados:', this.estudianteFormulario.value);
      this.cerrarModal();
    } else {
      console.log('Formulario inválido');
    }
  }


}
