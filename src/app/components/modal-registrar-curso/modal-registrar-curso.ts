import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CursosService } from '../../services/cursos/cursos-service';
import { SweetAlertService } from '../../sweetalert/sweetalert-service';

@Component({
  selector: 'app-modal-registrar-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-registrar-curso.html',
  styleUrl: './modal-registrar-curso.css',
})
export class ModalRegistrarCurso implements OnInit {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;

  private modal: any;

  formularioBuilder = inject(FormBuilder);
  cursoService = inject(CursosService);

  cursoFormulario!: FormGroup;

  ngOnInit() {
    this.cursoFormulario = this.formularioBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  abrirModal() {
    this.modal = new (window as any).bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  cerrarModal() {
    if (this.modal) this.modal.hide();
  }

  crearCurso() {
    if (this.cursoFormulario.valid) {
      console.log('Datos:', this.cursoFormulario.value);
      this.cursoService.crearCurso(this.cursoFormulario.value)
        .subscribe({
          next: (res) => {
            SweetAlertService.exito('Curso creado');
            this.cursoFormulario.reset();
            this.cerrarModal();
          },
          error: (err) => console.error('Error al crear curso:', err)
        });
    } else {
      SweetAlertService.error('Formulario inválido');
    }
  }
}
