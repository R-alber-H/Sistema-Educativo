import {  Component, ViewChild, ElementRef, OnInit, inject  } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante/estudiante-service';
import { ClasesService } from '../../services/clases/clases-service';

@Component({
  selector: 'app-modal-registrar-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-registrar-estudiante.html',
  styleUrl: './modal-registrar-estudiante.css',
})
export class ModalRegistrarEstudiante implements OnInit {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;

  estudianteService = inject(EstudianteService);
  clasesService = inject(ClasesService);
  private modal: any;

  formularioBuilder = inject(FormBuilder);
  estudianteFormulario! : FormGroup;
   clases: any[] = [];

  ngOnInit(){
      this.estudianteFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]*$')]],
      correo: ['', [Validators.required, Validators.email]],
      idClase: ['', Validators.required]
    });
    this.cargarClases();
  }

  cargarClases() {
    this.clasesService.obtenerClases().subscribe({
      next: (clases) => this.clases = clases,
      error: (err) => console.error('Error al cargar clases', err)
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

  crearEstudiante() {
    if (this.estudianteFormulario.valid) {
      const form = this.estudianteFormulario.value;

      const datos = {
        nombre: form.nombre,
        apellidos: form.apellido,
        dni: form.dni,
        correo: form.correo,
        password: "123456",
        idRol: 3,
        idClase: form.idClase
      };
      console.log('datos a enviar:', datos);
      this.estudianteService.crearEstudiante(datos).subscribe({
        next: resp => console.log("Usuario creado", resp),
        error: err => console.error("Error al crear", err)
      });
      this.estudianteFormulario.reset();
      this.cerrarModal();
    } else {
      console.log('Formulario inválido');
    }
  }
}
