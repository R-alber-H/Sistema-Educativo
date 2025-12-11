import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfesoresService } from '../../services/profesores/profesores-service';

@Component({
  selector: 'app-modal-registrar-profesor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-registrar-profesor.html',
  styleUrl: './modal-registrar-profesor.css',
})
export class ModalRegistrarProfesor implements OnInit {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;

  profesorService = inject(ProfesoresService);
  private modal: any;

  formularioBuilder = inject(FormBuilder);

  profesorFormulario!: FormGroup;

  ngOnInit() {
    this.profesorFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]*$')]],
      correo: ['', [Validators.required, Validators.email]],
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

  crearProfesor() {
    if (this.profesorFormulario.valid) {
      const form = this.profesorFormulario.value;

      const datos = {
        nombre: form.nombre,
        apellidos: form.apellido,
        dni: form.dni,
        correo: form.correo,
        password: "123456",
        idRol: 2,
        idClase: 1
      };

      console.log('DTO a enviar:', datos);
      this.profesorService.crearProfesor(datos).subscribe({
        next: resp => console.log("Usuario creado", resp),
        error: err => console.error("Error al crear", err)
      });

      this.cerrarModal();
    } else {
      console.log('Formulario inválido');
    }
  }


}
