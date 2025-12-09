import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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

  profesorFormulario!: FormGroup;

  ngOnInit() {
    this.profesorFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  abrirModal(profesor?:any) {
    if (profesor) {
      this.profesorFormulario.patchValue({
        nombre: profesor.nombre,
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
    if (this.profesorFormulario.valid) {
      console.log('Datos editados:', this.profesorFormulario.value);
      this.cerrarModal();
    } else {
      console.log('Formulario inválido');
    }
  }

}
