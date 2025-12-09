import {  Component, ViewChild, ElementRef, OnInit, inject  } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-registrar-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-registrar-estudiante.html',
  styleUrl: './modal-registrar-estudiante.css',
})
export class ModalRegistrarEstudiante implements OnInit {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;

  private modal: any;

  formularioBuilder = inject(FormBuilder);

  cursoFormulario! : FormGroup;

  ngOnInit(){
      this.cursoFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
      dni: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]*$')]],
      correo: ['', [Validators.required,Validators.email]],
    });
  }

  abrirModal() {
    this.modal = new (window as any).bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  cerrarModal() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  guardarCambios() {
    if (this.cursoFormulario.valid) {
      console.log('Datos :', this.cursoFormulario.value);
      this.cerrarModal();
    } else {
      console.log('Formulario inválido');
    }
  }
}
